const router = require("express").Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

// Middleware to parse cookies
router.use(cookieParser());

// User model/schema
const User = require('../model/user');


// Sign up route
router.post('/signup', async (req, res) => {
  const { name, email, password,stateName,district,phone,pincode, address } = req.body;

  // Hash password with bcrypt
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user document
  const user = new User({
    name,
    email,
    phone,
    stateName,
    district,
    pincode,
    address,
    password: hashedPassword
  });

  // Save user to database
  await user.save();

  // Send response
  res.status(201).send('User created successfully.');
});

// Sign in route
router.post('/signin', async (req, res) => {
  const { email, password, phone} = req.body;

  // Find user by email
  const user = await User.findOne({$or:[{email},{phone}]});

  // Verify password with bcrypt
  const passwordMatch = bcrypt.compare(password, user.password);

  // If password is invalid, send error response
  if (!passwordMatch) {
    return res.status(401).send('Invalid email or password.');
  }

  // Generate JWT token
  const token = jwt.sign({ userId: user._id }, 'secret_key', {
    expiresIn: '1h'
  });

  // Store token in HTTP-only cookie
  res.cookie('jwt', token, {
    httpOnly: true
  });

  // Send success response
  res.status(200).send('Sign in successful.');
});

// Authentication middleware
const authMiddleware = async (req, res, next) => {
  const token = req.cookies.jwt;

  // If token is missing, send error response
  if (!token) {
    return res.status(401).send('Authentication required.');
  }

  try {
    // Verify token with JWT
    const decoded = jwt.verify(token, 'secret_key');

    // Find user by ID
    const user = await User.findById(decoded.userId);

    // If user not found, send error response
    if (!user) {
      return res.status(401).send('Authentication required.');
    }

    // Set user on request object for future use
    req.user = user;

    // Call next middleware
    next();
  } catch (error) {
    // If token is invalid or expired, send error response
    res.status(401).send('Authentication required.');
  }
};

// Protected route
router.get('/protected', authMiddleware, (req, res) => {
  res.status(200).send(`Welcome ${req.user.name}!`);
});

// Log out route
router.post('/logout', (req, res) => {
  // Clear JWT cookie
  res.clearCookie('jwt');

  // Send success response
  res.status(200).send('Logged out successfully.');
});

module.exports = router
const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// dotenv.config();
//connect to DB
mongoose.connect("mongodb://localhost/sign",{ useNewUrlParser: true, useUnifiedTopology: true }).
then(()=>{console.log("connected To DB")}).catch((err)=>{console.log(err);})


app.listen(8080, () => console.log('Server running......'));
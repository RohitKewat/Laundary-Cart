const express = require('express');
const orderRouter = express.Router();
const bodyparser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
orderRouter.use(cookieParser());


// const userDetailbyToken = (token) => {
//     return new Promise((resolve, reject) => {
//         if (token) {
//             try {
//                 let userdata = jwt.verify(token, secret) ;
//                 resolve(userdata);

//             } catch (e) {
//                 reject("Invalid token")
//             }

//         } else {
//             reject("token not found ")
//         }
//     })
// }

orderRouter.get('/orders', authMiddleware,async(req, res) => {

    const user = req.user.id


                       
        try {
            const user = req.user.id
            const orders = await  orderModel.find({userId : user}) ; 
            if(orders){
               
                res.status(200).json({
                    status : "successfully getting orders",
                    orders : orders
                })
            }else{
                res.status(500).json({
                    status : "failed",
                    message : "no order created by user"
                })         
            }
            
        } catch (e) { 
            res.status(500).json({
                status : "failed" ,
                message : e.message
            })
            
        }
        

})

module.exports = orderRouter
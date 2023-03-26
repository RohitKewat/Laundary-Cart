const express = require('express') ;
const connection = require('./connection/connection'); 
const orderRouter = require('./Routes/orders');
connection () ;
const app = express() ;
app.use(orderRouter)
const Port = 5000 || process.env.PORT
app.get('/',(req,res)=>{
    res.send("Working good")
})

app.listen(Port,()=> console.log(`app is running at port ${Port}`)) ;
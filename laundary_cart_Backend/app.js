const express = require('express') ;
// const connection = require('./connection/connection'); 
// connection () ;
const app = express() ;
const Port = 5000 || process.env.PORT
app.get('/',(req,res)=>{
    res.send("Working good")
})

app.listen(Port,()=> console.log(`app is running at port ${Port}`)) ;
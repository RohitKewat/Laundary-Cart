const mongoose = require('mongoose');
 
const url = ''
const connection=async()=>{
    mongoose.set('strictQuery', false);

   try {
     await mongoose.connect(url)
     console.log("mongodb is connected successfully ");

   } catch (e) {
    console.log(e);

   }
}

 module.exports = connection ;
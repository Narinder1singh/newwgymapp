const mongoose = require('mongoose')

let url = process.env.DB_URLL
const mongoConnect= ()=>{
   
    mongoose.connect(url).then(()=>{
        console.log("connection Successful")
    }).catch((err)=>{
        console.log("Some Error",err)

    })
}
module.exports  = {
    mongoConnect
}
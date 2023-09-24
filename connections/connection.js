const mongoose = require('mongoose')
require('dotenv').config();

let url = process.env.DB_URL;
const mongoConnect= async()=>{
    mongoose.connect(url).then(()=>{
        console.log("connection Succful")
    }).catch(()=>{
        console.log("Some Error")

    })
}
module.exports  = {
    mongoConnect
}
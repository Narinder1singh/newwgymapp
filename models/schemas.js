const mongoose = require('mongoose')

const userData = new mongoose.Schema({
      fullName:{
        type: String,
        required: true
      },
      phnumber:{
        type: Number,
        required: true
      },
      age:{
        type: Number,
        required: true
      },
      mesg:{
        type: String,
        required: true
      },
      Join:{
        type: Date,
        required: true
      },
      payment:{
        type: Number,
        required: true
      }

})

const user = mongoose.model('gymdata',userData)

module.exports= user;
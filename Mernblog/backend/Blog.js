const uniqueValidator = require('mongoose-unique-validator')
const mongoose = require("mongoose")
const url="mongodb+srv://bharath:bharath@cluster0.ugwez.mongodb.net/project?retryWrites=true&w=majority"


mongoose.connect(url,{ useNewUrlParser: true ,useUnifiedTopology:true})
.then( () =>{
    console.log("connected")
   
})
.catch(err =>{
    console.log(err)
})

const Blog = new mongoose.Schema({
    Title:
        String
    ,
    Author:
        String
    ,
    content:
        String
        
    ,
    date:{
        type:Date,
        default: new Date()
        
    },
    user: [{
        username:String,
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	}]
   

})





Blog.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

  module.exports = mongoose.model('Blog', Blog)

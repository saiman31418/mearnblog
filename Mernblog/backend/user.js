const mongoose = require("mongoose")
const uniqueValidator = require('mongoose-unique-validator')

const url="mongodb+srv://bharath:bharath@cluster0.ugwez.mongodb.net/project?retryWrites=true&w=majority"


mongoose.connect(url,{ useNewUrlParser: true ,useUnifiedTopology:true})
.then( () =>{
    console.log("connected")
   
})
.catch(err =>{
    console.log(err)
})



const User = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        minlength: 3
      },
      phonenumber: {
        type: String,
        minlength: 10
      },
      email:{
        type:String
        
      },
      password:{
        type:String,
        minlength:8
      },
      blogs: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Blog'
        }
      ]

})
User.plugin(uniqueValidator)



User.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })




module.exports = mongoose.model('User', User)
const d=new Date
console.log(d)






const mongoose = require("mongoose")


const url="mongodb+srv://bharath:bharath@cluster0.ugwez.mongodb.net/project?retryWrites=true&w=majority"


mongoose.connect(url,{ useNewUrlParser: true ,useUnifiedTopology:true})
.then( () =>{
    console.log("connected")
   
})
.catch(err =>{
    console.log(err)
})



const BlogUser = mongoose.Schema({
    usernumber: {
        type: String
       
      
      },
      blognumber: {
        type: mongoose.Schema.Types.ObjectId
       
      },
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
      
  }
     
})




BlogUser.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })




module.exports = mongoose.model('BlogUser', BlogUser)







const express =require("express")
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan =require("morgan")
const User =require("./user")
const app= express()
const Blog=require("./Blog")
const BlogUser=require("./bloguser")
app.use(cors())
app.use(bodyParser.json())
app.use(cors())
morgan.token('body', (req) => JSON.stringify(req.body))
app.use(morgan(' :method :url :status :res[content-length] - :response-time ms :body'))





app.get("/",(req,res)=>{
    res.send("hello")
})

app.get("/hello",(req,res)=>{
  res.send("hiiii")
})


app.post("/users",(req,res,next)=>{
    
    const {username,phonenumber,email,password}=req.body
    const user= new User({
        username,
        phonenumber,
        email,
        password
    }
    )
    user.save()
    .then(savedPerson => {
      res.json(savedPerson)
    })
    .catch(error =>  
      
      next(error)

     
     )
})

app.get('/show', (req, res) => {
  User.find( {}).then(people => {
    res.json(people)
  })
})
app.get('/show/:id', (req, res) => {
  User.findById( req.params.id).then(people => {
    res.json(people)
  })
})
app.put('/update/:id', async(req, res) => {

  const {username,email,password,phonenumber}=req.body
  try{
     await User.findById(req.params.id).then(p=>{
      console.log(username)
      if(username){
        p.username=username

      }
      if(password){
        p.password=password

      }
      if(email){
        p.email=email

      }
      if(phonenumber){
        p.phonenumber=phonenumber

      }
     
    
 
  
     p.save()
     res.send(p)
    })

  }
  catch(err){
    console.log(err)
  }






})

app.get("/user/:id",(req,res)=>{
  const id = req.params.id
  User.findById(id)
  .then(u =>{
    res.json(u)
  })

})

app.post("/blogs/:id",(req,res)=>{

  const u=User.findById(req.params.id)
 
  

const {Title,
  Author,
  content
 
  }=req.body
  user=u._id
 

  
  
  var date = Date();
  console.log(date)

  const b= new Blog({
    Author,
    content,
    Title,
    user
    
   
  })
  
 

   b.save() 

   const bu= new BlogUser({
     usernumber:Author,
     blognumber:b,
     Author,
     content,
     Title
   })
   bu.save()
 
 


  .then(savedPerson => {
    res.json(savedPerson)
  })
  



})
app.get("/newblogs/:name",(req,res)=>{
  const name=req.params.name
  BlogUser.find({usernumber:name})
  .then(bu=>{
    res.json(bu)
  })
})



app.get("/blogs",(req,res)=>{
  Blog.find( {}).then(people => {
    res.json(people)
    console.log(people.length)
  })
})
app.get("/blog/:id",(req,res)=>{
  const id = req.params.id
  Blog.findById(id)
  .then(v=>{
    res.json(v)
  })

  
  
})

app.get("/bloguser/:id",(req,res)=>{
   const a=User.findById(req.params.id)
   Blog.find({"username":a.username})
 
  
 
  .then(v=>{
    res.json(v)
   
  })
  
 






})
app.get("/username/:name",(req,res)=>{
  var name= req.params.name
  User.findOne({'username':name})
  .then(name=>{
    res.json(name)
  })
   


  
})

app.delete("/deleteblog/:id",(req,res)=>{
  Blog.findByIdAndRemove(req.params.id)
  .then(del=>{
    res.json(del)

  })
 const b= BlogUser.find({'blognumber':req.params.id})
b.deleteOne()
 .then(bu=>{
   res.json(bu)
 })
  
 
  
  
})
app.put('/updateblog/:id', async(req, res) => {

  const {Title,Author,content}=req.body
  const b= BlogUser.find({'blognumber':req.params.id})
  
  b.updateOne({
    "Title":Title,
    "Author":Author,
    "content":content

    
  })
   
   .then(b=>{
     res.json(b)
    
     


   })
   try{
    await Blog.findById(req.params.id).then(p=>{
     
     if(Title){
       p.Title=Title

     }
     if(Author){
       p.Author=Author

     }
     if(content){
       p.content=content

     }
    
    
   

 
    p.save()
    res.send(p)
    
   
   })
   

 }
 catch(err){
   console.log(err)
 }
    







})


   

  

 
   
   


const errorHandler = (error, req, res, next) => {
    console.error('Error:', error.message)
  
    if (error.name === 'CastError' && error.kind === 'ObjectId') {
      return res.status(400).json({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        
      return res.status(400).json({ error: error.message })
  
    }
  
    next(error)
  }

  app.use(errorHandler)


app.listen("3002")
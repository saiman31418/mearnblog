import React,{useState,useEffect} from 'react'
import {Container,Row,Col,Form,Button,Navbar,Nav,NavDropdown,FormControl} from 'react-bootstrap'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";


const  Home=()=>{
  const [data,setData]=useState([])
  const[search,setSearch]=useState([])
  const[date,setDate]=useState("")

  let history =useHistory()
  function getData(){
    axios
    .get("http://localhost:3002/blogs")
    .then(res=>{
      setData(res.data)
    })

  }
 useEffect(getData,[])

 const sortBydate=()=>{
  
 console.log("sorted")
 }


  
    return(
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Blog</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
      
    </Nav>
    <Nav>
      <div className="search">
      <FormControl type="text" placeholder="Search Blogs by title or author" onChange={(e)=>setSearch(e.target.value)} className="mr-sm-2" className="searchbar"/>

      </div>
   
    </Nav>
    <Nav>
  
      <Nav.Link eventKey={2} href="/login">
       Login
      </Nav.Link>
      <Nav.Link eventKey={2} href="/Register">
       Register
      </Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
<div className="post">
<Button variant="dark" onClick={()=>{data.sort((a,b)=>{
    return new Date(b.date) - new Date(a.date);
   
 
 })}}>Sort by Date</Button>
<Button variant="dark" onClick={()=>{history.push("/login")}}>New Post</Button>
<p className="remove">create posts</p>
 

</div><br></br>

{data.sort((a,b)=>{
    return new Date(b.date) - new Date(a.date);
   
 
 })
 .
filter((s)=>{
  if(s.Title.includes(search) || s.Author.includes(search)){
    return s
  }
})

.map(a=>(
  <div>

 
     
      <Container >
  <div>
  <Link to ={`/singleblog/${a.id}`}  >
    
  <Row className="blogs" >

  
    <Col>
    <h1>{a.Title}</h1>
      <p>{a.Author}</p>
      <p>{a.content}</p>
      <p>{a.date}</p>
   
    
    </Col>
  </Row>
  </Link>

  </div>
 
</Container>
      </div>
    ))}





    </>


  

     
    )
}
export default Home
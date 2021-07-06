import React,{useState,useEffect} from 'react'
import {Container,Row,Col,Form,Button,Navbar,Nav,NavDropdown,FormControl} from 'react-bootstrap'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import UserUpdate from './userUpdate';
import Sort from './sortbydate'
import SortWithOut from './sortwithoutdate'


const  UserBlogs=({username,id})=>{
  const [data,setData]=useState([])
 
 

 
  
  const[search,setSearch]=useState([])
  const [date,setDate]=useState([])
 

  axios.get(`http://localhost:3002/newblogs/${username}`)
  .then(res=>{
    setData(res.data)
    
  })
 


  
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
      <FormControl type="text" placeholder="Search Blogs" className="mr-sm-2" className="searchbar" onChange={(e)=>{setSearch(e.target.value)}} />

      </div>
   
    </Nav>
    <Nav>
    <NavDropdown title="Profile" id="collasible-nav-dropdown">
    <Link to ={`/userupdate/${id}`}  >
      
        <NavDropdown.Item href="/userupdate/123"  >Profile</NavDropdown.Item>
        </Link>
      
        <NavDropdown.Item href="#action/3.2">Signout</NavDropdown.Item>
    
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Signout</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link eventKey={2} href="#memes">
       welcome {username}
      </Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
<div className="post">
<Button variant="dark" onClick={(e)=>{setDate("sort")}}>Sort by Date</Button>
<Link to ={`/createblog/${id}`}>
<Button variant="dark">New Post</Button>

<p className="remove" >create posts</p>
</Link>
 

</div><br></br>

<div className="post">


<p className="remove">create posts</p>
 

</div><br></br>

{
 date ==="sort"?(
  <Sort data={data} search={search}></Sort>
 ):(
  <div>
    <SortWithOut data={data} search={search}></SortWithOut>


    </div>

      
 )
}

  






    </>
     
    )
}
export default UserBlogs
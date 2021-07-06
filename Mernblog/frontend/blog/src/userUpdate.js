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



const UserUpdate=()=>{
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [phonenumber,setPhonenumber]=useState("")
    const [password,setPassword]=useState("")
    const [data,setData]=useState([])
    const {id} =useParams()
    function getData(){
      
    axios.get(`http://localhost:3002/user/${id}`)
    .then(res=>{
        setData(res.data)
        console.log(data)
        setUsername(data.username)
        setEmail(data.email)
        setPhonenumber(data.phonenumber)
        setPassword(data.password)
    })

    }

    function handleSubmit(){
        const user ={
            username,
            password,
            email,
            phonenumber
            
        }
        axios.put(`http://localhost:3002/update/${id}`,user)
        .then(res=>{
            console.log(res)
            console.log(user)
        })
       
    }
    useEffect(getData,[])


    return(
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Blog</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      
    </Nav>
    <Nav>
      <div className="search">
      <FormControl type="text" placeholder="Search Blogs" className="mr-sm-2" className="searchbar"/>

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
        Dank memes
      </Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
<br></br>
             <Form onSubmit={handleSubmit}
              className="update">
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email"  placeholder={data.email}  value={data.email} onChange={(e)=>{setEmail(e.target.value)}}  />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password"  placeholder={data.password} onChange={(e)=>{setPassword(e.target.value)}} />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>username</Form.Label>
    <Form.Control placeholder={data.username} onChange={(e)=>{setUsername(e.target.value)}} />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>phonenumber</Form.Label>
    <Form.Control placeholder={data.phonenumber} onChange={(e)=>{setPhonenumber(e.target.value)}}  />
  </Form.Group>

  

  <Button variant="dark" type="submit">
    Submit
  </Button>
</Form>

        </div>
       
    )
}

export default UserUpdate


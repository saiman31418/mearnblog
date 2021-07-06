import React,{useState,useEffect} from 'react'
import {Container,Row,Col,Form,Button,Navbar,Nav,NavDropdown,FormControl} from 'react-bootstrap'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory
} from "react-router-dom";



const BlogUpdate=()=>{
    const [Title,setTitle]=useState("")
    const [Author,setAuthor]=useState("")
    const [content,setContent]=useState("")
    const [password,setPassword]=useState("")
    const [data,setData]=useState([])
    const {id} =useParams()
    let history =useHistory()
    function getData(){
      
    axios.get(`http://localhost:3002/blog/${id}`)
    .then(res=>{
        setData(res.data)
        console.log(data)
        setTitle(data.Title)
        setAuthor(data.Author)
        setContent(data.content)
       
    })

    }

    function handleSubmit(){
        const user ={
            Title,
            Author,
            content
            
            
        }
        axios.put(`http://localhost:3002/updateblog/${id}`,user)
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
    <Link to ={`/blogupdate/${id}`}  >
      
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
      <Form.Label>Title</Form.Label>
      <Form.Control type="text"  placeholder={data.Title}   onChange={(e)=>{setTitle(e.target.value)}}  />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Author</Form.Label>
      <Form.Control type="text"  placeholder={data.Author} onChange={(e)=>{setAuthor(e.target.value)}} />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>content</Form.Label>
    <Form.Control className="content"  placeholder={data.content} onChange={(e)=>{setContent(e.target.value)}} />
  </Form.Group>

  

  

  <Button variant="dark" type="submit">
    Submit
  </Button>
</Form>

        </div>
       
    )
}

export default BlogUpdate


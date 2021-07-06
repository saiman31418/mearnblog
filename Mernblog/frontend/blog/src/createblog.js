import React,{useState} from 'react'
import {Container,Row,Col,Form,Button,Navbar,Nav,NavDropdown,FormControl,Dropdown,SplitButton,DropdownButton,ButtonGroup} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory
} from "react-router-dom";
import axios from  'axios'

const Create=()=>{
    const [drop,setDrop]=useState("")
    const [Title,setTitle]=useState("")
    const [Author ,setAuthor]=useState("")
    const [content,setContent]=useState("")
    const [username,SetUsername]=useState([])
    const {id} =useParams()
    let history =useHistory()
    
   
   
    function handle(){
     

      const blog={
        Title,
        Author,
        content,
        username
      }
      console.log("called")
      axios.post(`http://localhost:3002/blogs/${id}`,blog)
      .then(res=>{
        console.log(res)
      })
      history.push(`/userhome/${id}`)
     

    }
    axios.get(`http://localhost:3002/user/${id}`)
    .then(res=>{
      SetUsername(res.data.username)
      console.log(res.data.username)
     
    })
   
   

   
    return (
       
           <div>
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Blog</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
      
    </Nav>
    <Nav>
      <div className="search">
      <FormControl type="text" placeholder="Search Blogs" className="mr-sm-2" className="searchbar"/>

      </div>
   
    </Nav>
    <Nav>
  
      <Nav.Link eventKey={2} href="#memes">
       Login
      </Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
       Register
      </Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar><br></br>
<Container>
    <Row className="row align-items-end">
        <Col md={12} className="col align-self-center">
        <Form onSubmit={handle}>
          
          <Form.Group controlId="form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Title" onChange={(e)=>{setTitle(e.target.value)}} />
           
          </Form.Group>
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" placeholder="Enter Author Name" onChange={(e)=>{setAuthor(e.target.value)}} />
            <Form.Text className="text-muted">
            
            </Form.Text>
          </Form.Group>

          <Form.Group  >
            <Form.Label >Content</Form.Label>
            <Form.Control className="content" type="text" placeholder="Enter content" onChange={(e)=>{setContent(e.target.value)}} />
          </Form.Group>

        
          <Button variant="dark" onClick={()=>{handle()}}>New Post</Button>
          
 
</Form>


        </Col>

    </Row>


   
   
  
    </Container>

</div>
          

      
    )
}
export default Create

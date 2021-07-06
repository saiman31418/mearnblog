import axios from 'axios'
import React ,{useEffect,useState} from 'react'
import { Container,Row,Col,Form,Button} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";




const Login =()=>{
    const [persons,setPersons]=useState([])
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    let history= useHistory()

    useEffect (()=>{
        axios.
        get("http://localhost:3002/show")
        .then(response=>{
            setPersons(response.data)
            console.log(persons)
            console.log(password)
        })
    },[password])

    function handlelogin(e){
         e.preventDefault()
        let person=persons.find(p=>{
            if(p.username==username){
                return p
            }
        })

       if(person.password ==password){
         axios.
         get(`http://localhost:3002/username/${username}`)
         .then(res=>{
         
           console.log(res.data)
           history.push(`/userhome/${res.data.id}`)
         }
     
          )
        
        
       }
       else{
           alert("sdhv")
       }
    }

    function check(){
        if(password.length==0){
            return true
        }
        else{
            return false
        }
    }

    
return(
    <div className="newlogin">
        <Container >
  
  <Row className="row align-items-end">
    <Col md={12} className="col align-self-center">
    <Form onSubmit={handlelogin
    }>
        <div className="form">
  <Form.Group controlId="formBasicEmail">
    <Form.Label>username</Form.Label>
    <Form.Control type="text" placeholder="Enter username" onChange={(e)=>{setUsername(e.target.value)}} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"  onChange={(e)=>{setPassword(e.target.value)}} />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  {password.length==0?(
      <Button variant="primary" type="submit" disabled >
  
      Submit
    </Button>
    

  )
  :(
    <Button variant="primary" type="submit" >
  
    Submit
  </Button>
  )
}

<a href="/Register">New to website</a>
  
  </div>
</Form>



    </Col>
   
  </Row>
</Container>
       
     
     
       
    </div>
)
}




export default Login

import React from 'react'
import {Container,Row,Col,Form,Button,Navbar,Nav,NavDropdown,FormControl} from 'react-bootstrap'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory
  } from "react-router-dom";


const Sort=({data,search})=>{
  let history = useHistory()
   return(
       <div>
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
  
    
  <Row className="blogs" >

  
    <Col>
    <h1>{a.Title}</h1>
      <p>{a.Author}</p>
      <p>{a.content}</p>
      <p>{a.date}</p>
      <Button variant="info" onClick={()=>{history.push(`/blogupdate/${a.blognumber}`)}}>update</Button>
      <Button variant="danger" onClick={()=>{

axios.delete(`http://localhost:3002/deleteblog/${a.blognumber}`)
.then(res=>{
  console.log(res.data)

})}}>delete</Button>
   
    
    </Col>
  </Row>
 

  </div>
 
</Container>
      </div>
    ))}

       </div>
   )
}

export default Sort
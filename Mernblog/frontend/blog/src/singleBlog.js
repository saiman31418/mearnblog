import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import {Container,Row,Col,Form,Button,Navbar,Nav,NavDropdown,FormControl} from 'react-bootstrap'

const SingleBlog =()=>{
    const {id} =useParams()
    const[blog,SetBlog]=useState([])
    function getData(){
        axios.get(`http://localhost:3002/blog/${id}`)
        .then(
            res =>{
               
                SetBlog(res.data)
                console.log(blog)
               
    
            }
        )

    }
    useEffect(getData)
      

    
    
    
    
    return(
        <div>
      
<div>


 
  <Container>
<div>

<Row className="blogs">

<Col>
<h1>{blog.Title}</h1>
  <p>{blog.Author}</p>
  <p>{blog.content}</p>
  <p>{blog.date}</p>


</Col>
</Row>


</div>

</Container>
  </div>

    </div>
      
    )


}

export default SingleBlog
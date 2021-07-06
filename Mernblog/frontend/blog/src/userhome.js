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
import UserBlogs from './getuserblogs';


const  UserHome=()=>{
  const [data,setData]=useState([])
  const {id}=useParams()
  function getData(){
    axios
  .get(`http://localhost:3002/bloguser/${id}`)
  .then(res=>{
    setData(res.data)
  })

  }

  useEffect(getData,[])
  
  const[search,setSearch]=useState([])
  const [date,setDate]=useState([])
  const [username,SetUsername]=useState([])

  axios.get(`http://localhost:3002/user/${id}`)
  .then(res=>{
    SetUsername(res.data.username)
    console.log(res.data.username)
  })
  
 


  
    return(
    <>
    <UserBlogs username={username} id={id} ></UserBlogs>

    </>
     
    )
}
export default UserHome
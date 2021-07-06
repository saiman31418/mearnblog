import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React,{useEffect, useState} from 'react';
import crud from './services/crud'
import Register from './register';
import Login from './login';

import Edit  from './edit';
import Home from './home';
import Blog from './blog';

import Create from './createblog';
import SingleBlog from './singleBlog';
import UserHome from './userhome';
import UserUpdate from './userUpdate';
import Search from './search';
import UserBlogs from './getuserblogs';
import BlogUpdate from './updateblog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";



function App() {
 return(
   <div>
     <Router>
       <Switch>
         <Route exact path="/Login" component={Login}></Route>
         <Route exact path="/Register" component={Register}></Route>
         <Route exact path="/" component={Home}></Route>
         <Route exact path="/singleblog/:id" component={SingleBlog}></Route>
         <Route exact path="/userhome/:id" component={  UserHome }></Route>
         <Route exact path="/userupdate/:id" component={  UserUpdate }></Route>
         <Route exact path="/createblog/:id" component={  Create }></Route>
         <Route exact path="/search" component={  Search }></Route>
         <Route exact path="/blogupdate/:id" component={ BlogUpdate }></Route>



       </Switch>
     </Router>
    
     
  
  

  

   </div>
 )
}

export default App;

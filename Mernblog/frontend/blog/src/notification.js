
import React,{useEffect} from 'react'
import { Alert } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory
  } from "react-router-dom";


function Notification({err,type,setErr,setType}){

    let history =useHistory()


    useEffect(() => {
        if (err) {
            const timer = setTimeout(() => {
                setErr(null);
                setType('');
                history.push("/login")
            }, 5000);
            return () => clearTimeout(timer);
        }
       
    }, [err]);
  
    return (
        err ?
        <div>
        <Alert variant={type}>
<Alert.Heading>Hey, nice to see you</Alert.Heading>
<p>
 {err}
 

</p>

</Alert>


   </div>
        :
        null
    );
  };

   
    
   

   


export default Notification
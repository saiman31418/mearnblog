import axios from 'axios'
import React,{useState,useEffect} from 'react'

const Edit =()=>{
    const [p,SetP]=useState([])

    axios.put("http://localhost:3002/update/60c6e57b1c5289291c54addf",{
        name:"jayasuryann"
    })
    .then(res=>{
        console.log(res.data)
    })

    
   


 

    return (
        <div>
            
           <p>{p.length}</p>
          <input />
           



        </div>
    )
}

export default Edit
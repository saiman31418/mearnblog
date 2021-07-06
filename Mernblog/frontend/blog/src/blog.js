
import React from 'react'

import axios from 'axios'


const Blog =()=>{
   
    var d = new Date();

    const b={
        "Title":"hello",
    "Author":"hahah",
    "content":"ahhdv",
    "id":"60c6e57b1c5289291c54addf",
    "date":d
    }
    const id="60c6e57b1c5289291c54addf"
   

    axios.post(`http://localhost:3002/blogs`,b)
    .then(res=>{
        console.log(res.data)
       
    })
    return(
        <div>
            <h1>dfshb</h1>
        </div>
    )

}


export default Blog
import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Search=()=>{

    const[search,setSearch]=useState([])
    const [data,setData] =useState([])
    function get(){
        axios.get('http://localhost:3002/blogs')
    .then(res=>{
        setData(res.data)
        console.log(data)
    })

    }

    
    useEffect(get,[])
    return(
        <div>
            <input type="text " onChange={(e)=>{setSearch(e.target.value)}}></input>
            {data.filter(s=>{
                if(s.Author.includes(search))
                {
                    return s
                }
            })
            .map((a)=>(
                <h1>{a.Title}</h1>
            ))}
        </div>

    )
}
export default Search;
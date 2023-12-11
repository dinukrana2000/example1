import React,{useState,useEffect} from 'react'

function Githubapi({login}) {
    const [data,setData]=useState(null);
    useEffect(()=>{
        fetch('https://api.github.com/users/dinukrana2000')
        .then(res=>res.json())
        .then(setData)
        .catch(console.error);

    },[]);

    if(data){

        return <div>{data.login}<br/>
        <img src= {data.avatar_url} />
       
        </div>
    }
  return null;
    
}

export default Githubapi

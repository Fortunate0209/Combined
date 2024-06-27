import React, { useState } from 'react'
import Logo from "../assets/react.svg"
import Nav from './Nav'
import axios from 'axios'

const Home = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
    let url ="https://api.github.com/search/repositories?q=XXX"

    const getData=()=>{
      axios.get(url).then((res)=>{
        console.log(res.data);
        setData(res.data.items)
        setIsLoading(true)
      }).catch((error)=>{
        console.log(error);
      })

  }
  return (
    <div>

      <h1>Fetch</h1>
      <button onClick={getData}>Get Data</button>

      <div className=''>
      {/* {
                data.items && data.items.map((items)=>{
                   return(
                    <div key={items.id}>
                    <h4>{items.name}</h4>
                  
                </div>
                   )
                })
            } */}


           <div className='row d-flex gap-5 shadow p-4'>
           {
            !isLoading?<h2>Loading...</h2>:
              data.map((item,index)=>(
               
                  <div key={index} className='col-3 shadow mx-auto p-4'>
                    <p>{item.name}</p>
                    <p>{item.id}</p>
                    <img src={item.owner.avatar_url} className='w-25 img-fluid' alt="" />
                  </div>
                
              ))
            }
           </div>
        </div>
        
        {/* <img src={Logo} alt="" /> */}
    </div>
  )
}

export default Home
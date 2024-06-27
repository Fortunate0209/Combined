import React, { useEffect, useState } from 'react'
import Showresult from './Showresult'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
    const url ="http://localhost:4000/dashboard"
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    // useEffect(() => {
    //   getData()
    // }, [])
    

    const getData =()=>{
        axios.get(url).then((res)=>{
            setData(res.data.data)
            setIsLoading(true)
            // console.log(res.data);
        })
    }

    const token = localStorage.getItem('token')
    useEffect(() => {
      getData()
      axios.get("http://localhost:4000/verifyUser",{
        headers:{
          Authorization: `Bearers ${token}`,
          "ContentType": "Application/json",
          Accept: "Application/json"
      }
      })
      .then((res)=>{
        console.log(res.data);
        if(!res.data.status){
          localStorage.removeItem('token');
          navigate("/login")
        }
      })
    }, [])

  return (
    <div>
        {/* <button className='d-none' onClick={getData}>Get Data</button> */}

        <div>
            {
            !isLoading?<h2>Loading...</h2>:

            <Showresult data={data}/>
            }
        </div>
    </div>
  )
}

export default Dashboard
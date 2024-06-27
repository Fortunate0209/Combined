import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Signin = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let url = "http://localhost:4000/login"
  // let token = "12345"

  const signIn =()=>{
    axios.post(url, {email, password }).then((res)=>{
        console.log(res.data);
        localStorage.setItem("token", res.data.token)
        navigate("/dashboard")
    }) .catch((error)=>{
        console.log(error);
    })
  }
  return (
    <div>
        <div >
        <label htmlFor="">Email</label>
            <input className="form-control"  type="text" onChange={(e)=>setEmail(e.target.value)}/>

            <label htmlFor="">Password</label>
            <input className="form-control"  type="text" onChange={(e)=>setPassword(e.target.value)}/>
            <button className="btn btn-success w-25 mt-3 d-block mx-auto " onClick={signIn}>Signin User</button>
        </div>
    </div>
  )
}

export default Signin
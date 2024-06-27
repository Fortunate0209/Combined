import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    let url = "http://localhost:4000/signup"
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeName =()=>{
    // console.log(firstName, lastName, email, password);
    axios.post(url, {firstName, lastName, email, password }).then((res)=>{
        console.log(res.data);
        navigate("/login")
    
    }) .catch((error)=>{
        console.log(error);
    })
  }
  return (
    <div>
        <div className="w-50 mx-auto shadow p-5">
            <label htmlFor="">First name</label>
            <input className="form-control"  type="text" onChange={(e)=>setFirstName(e.target.value)}/>

            <label htmlFor="">Last name</label>
            <input className="form-control"  type="text" onChange={(e)=>setLastName(e.target.value)}/>

            <label htmlFor="">Email</label>
            <input className="form-control"  type="text" onChange={(e)=>setEmail(e.target.value)}/>

            <label htmlFor="">Password</label>
            <input className="form-control"  type="text" onChange={(e)=>setPassword(e.target.value)}/>
            <button className="btn btn-success w-25 mt-3 d-block mx-auto " onClick={changeName}>Register User</button>
        </div>
    </div>
  )
}

export default Register
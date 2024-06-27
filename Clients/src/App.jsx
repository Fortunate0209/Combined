import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Listofstudents from './components/Listofstudents'
import {Navigate, Route, Routes} from "react-router-dom"
import Signin from './components/Signin'
import Register from './components/Register'
import Nav from './components/Nav'
import Home from './components/Home'
import Product from './components/Product'
import Listofproduct from './components/Listofproduct'
import User from './components/User'
import Dashboard from './components/Dashboard'
import Not_found from './components/Not_found'
import Displayuser from './components/Displayuser'
import Formik from './components/Formik'

// import Dashboard from './components/Dashboard'



function App() {
  const authToken = localStorage.getItem('token')
  console.log(authToken);
  const [count, setCount] = useState(0)

  return (

   <>
   
   {/* <Register/> */}
   <Routes>
    <Route path='/' element={<Nav/>}>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Signin/>}/>
    <Route path="/formik" element={<Formik/>}/>
    {/* <Route path='/Dashboard' element={<Dashboard/>}/> */}
    <Route path="/product" element={<Product/>}>
    <Route path="/product/productola" element={<Listofproduct/>}/>
   </Route>
    <Route path="/" element={<Home/>}/>
    <Route path="/user" element={<User/>}/>
    <Route path="/user/users/:username" element={<Displayuser/>}/>
   </Route>
   <Route path="/*" element={<Not_found/>}/>
    <Route path="/Dashboard" element={authToken?<Dashboard/>:<Navigate to="/login"/>}/>


    
   </Routes>
   
   </>
  )
}

export default App

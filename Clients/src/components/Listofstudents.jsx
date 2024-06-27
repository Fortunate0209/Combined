import axios from 'axios'
import React from 'react'

const Listofstudents = () => {
    let url = "http://localhost:4000/listofstudents"
    function getData() {
        axios.get(url).then((res)=>{
console.log(res.data);
        }).catch((err)=>{
console.log(err);
        })
        
    }
  return (
    <div>
      
        <button onClick={getData}>Click</button>
    </div>
  )
}

export default Listofstudents
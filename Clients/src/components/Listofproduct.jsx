import React from 'react'
import { useParams } from 'react-router-dom'

const Listofproduct = () => {
  const {productola}=useParams()
  return (
    <div>
        <h1>product{productola}</h1>
    </div>
  )
}

export default Listofproduct

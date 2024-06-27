import React from 'react'
import { useNavigate } from 'react-router-dom'

const Not_found = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h1 className='text-danger'>This is not the page you are looking for</h1>
        <p className='text-danger'>error 404</p>
        <button onClick={()=>navigate('/')} className='bg-dark text-info p-3 rounded'>Go back to the main page</button>
    </div>
  )
}

export default Not_found
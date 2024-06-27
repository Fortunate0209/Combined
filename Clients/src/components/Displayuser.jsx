import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Displayuser = () => {
    const {username}=useParams()
    const [data, setData] = useState([])
    let url =`https://api.github.com/users/${username}`

    useEffect(() => {
    axios.get(url).then((res)=>{
        console.log(res.data);
        setData(res.data)
    })

    }, [])
    
   
  return (
    <div>
        <nav>
            <button><Link to={'/'}> Go to Home</Link></button>

        </nav>
        <div>
            <div className='row shadow mx-auto p-5 gap-2'>
                {
                
                        
                            <div  className=' shadow mx-auto w-50 p-5'>
                                <h5>{data.id}</h5>
                                <h5>Type: {data.type}</h5>
                                <h5>Login: {data.login}</h5>
                                <img className='w-50 mx-auto rounded-pill' src={data.avatar_url} alt="" />
                            </div>
                        
                    
                }
            </div>
        </div>
    </div>
  )
}

export default Displayuser
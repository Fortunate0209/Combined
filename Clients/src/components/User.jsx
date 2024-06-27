import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const User = () => {
    let url ="https://api.github.com/users"
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(url).then((res)=>{
            console.log(res.data);
            setData(res.data)
        }).catch((error)=>{
            console.log(error);
        })
    }, [])
    

    // const click=()=>{
    //     navigate('/userdisplay')
    // }
  return (
    <div>
        {/* <button onClick={GetUser}>Get User</button> */}

        <div className='row shadow mx-auto p-5 gap-2'>
            {
                data.map((item)=>{
                    return(
                        <div key={item.id} className='col-3 shadow p-5 m-3 mx-auto '>
                            <h5>{item.id}</h5>
                            <h5>Type: {item.type}</h5>
                            <h5>Login: {item.login}</h5>
                            <img className='w-50 mx-auto rounded-pill' src={item.avatar_url} alt="" />
                            <button className='bg-info p-2 m-3' onClick={()=>navigate(`/user/users/${item.login}`)}>view profile</button>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default User
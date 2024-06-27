import React from 'react'

const Showresult = ({data}) => {
  return (
    <div>
        {
            data.map((item,index)=>(
                <div key={index}>
                <p>Firstname: {item.firstName}</p>
                <p>Lastname: {item.lastName}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Showresult
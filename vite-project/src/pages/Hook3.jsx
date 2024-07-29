import React, { useState,useEffect } from 'react'

const Hook3 = () => {
    const[count, setCount] = useState(0);

    useEffect(()=>
    {
        setTimeout(()=>{
            setCount((count=>count+1))
        },1000)
    },[])
  return (
    <div>
      <h1>Count down is going on {count}</h1>
    </div>
  )
}

export default Hook3

import React,{useState} from 'react'

const Hook1 = () => {
    const [name,setName]= useState("Ankita")
  return (
    <div>
      <h3>My intern name is {name}.</h3>
      <button onClick={() => setName("Dharitree")}>
        Intern1
      </button>

      <button onClick={() => setName("Pallavi")}>
        Intern2
      </button>

      <button onClick={() => setName("Bhagyashree")}>
        Intern3
      </button>

      <button onClick={() => setName("Subha")}>
        Intern4
      </button>
    </div>
  )
}

export default Hook1

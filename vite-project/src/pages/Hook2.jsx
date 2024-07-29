import React,{useState} from 'react'

const Hook2 = () => {
    const [details, setDEtails] = useState({
        name:'John',
        age:25,
        address:'bbsr'
    })
    const [details2, setDEtails2] = useState({
        name:'Mary',
        age:35,
        address:'kdp'
    })
    const [details3, setDEtails3] = useState({
        name:'Ankita',
        age:23,
        address:'Jspur'
    })
    const updateAddress = () =>{
         setDEtails(previousState =>{
            return{...previousState, address:'paradip', name:'Subha',age:'23' }
         })
    }

  return (
    <div>
      <h1>My friends name are: {details.name} with the age {details.age} address {details.address} .</h1>
      <button onClick={updateAddress}>Change text</button>
    </div>
  )
}

export default Hook2

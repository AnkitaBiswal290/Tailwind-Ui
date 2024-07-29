import React from 'react'
import Girl from  '../assets/study-img.jpg';

function Aboutus() {
  return (
    <div className='max-w-[1240px] mx-auto my-10  md:grid grid-cols-2 mx-30 '>
      <div className='col-span-1 md:w-[100%] text-center'>
         <img src={Girl}/>
      </div>
      <div className='col-span-1  flex flex-col mt-5'>
        <h4 className='font-bold text-2xl pt-4 md:pt-3'>LEARN FROM EXPERTS</h4>
        <p className='font-mono my-4 '> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
           or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem
           Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
        </p>

        <a href="#" className='w-36 rounded-md bg-black px-6 py-3 text-center font-semibold text-white'> Get Started</a>
        
      </div>
    </div>
  )
}

export default Aboutus
 
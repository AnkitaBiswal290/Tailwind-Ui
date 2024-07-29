import React from 'react'
import List from './List'
function List1() {
    const cars = ['ford', 'audi','bmw'];
  return (
    <div>
      <ol>{cars.map((x)=><List brand={x}/>)}
      </ol>
    </div>
  )
}

export default List1

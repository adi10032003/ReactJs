import { useState } from 'react'
import './Counter.css'
const Counter = () => {
    const[count,countvalue]=useState(0)
  return (
    <div className='Main-Container'>
      <counter className="container">
        <h1>Counter</h1>
        <h1>You have clicked it {count} times</h1>
        <div className='counterbutton'>
            <button onClick={()=>{countvalue(count+1)}} className='increment button'>Increase</button>
            <button onClick={()=>{countvalue(0)}} className='reset'>Reset</button>

        </div>
      </counter>
    </div>
  )
}

export default Counter

import { useState } from 'react'
import './Counter.css'
const Counter = () => {
    const[count,countvalue]=useState(0)
  return (
    <div className='Main-Container'>
      <div className="container">
        <h1>Counter</h1>
        <div className='heading'>You have clicked it {count} times</div>
        <div className='counterbutton'>
            <button onClick={()=>{countvalue(count+1)}} className='increment button'>Increase</button>
            <button onClick={()=>{countvalue(0)}} className='reset'>Reset</button>

        </div>
      </div>
    </div>
  )
}

export default Counter

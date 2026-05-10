
import { useState } from 'react'
import './App.css'
import Button from './Component/Button'
// import Card from './Component/Card'

function App() {
  const[count,counter]=useState(0);

  return (
    <div>
        <Button>
          <h1 className="heading">You have clicked it {count} times</h1>
          <button onClick={()=>{counter(count+1)}} className='increment'>Increase</button>
          <button onClick={()=>{if(count>0){counter(count-1)}}} className='decrement'>Decrease</button>
          <button onClick={()=>{counter(0)}} className='reset'>Reset</button>
        </Button>


      {/* <Card Name="Aditya">
      {/*If we write anything in this card it will become children of Card 
        <h1 className="heading">This is heading</h1>

      </Card> */}
    </div>
  )
}

export default App

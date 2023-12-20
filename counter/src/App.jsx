import React, { useState } from 'react'

const App = () => {
  const [counter , setcounter] = useState(0)
  return (
    <>
    <h1>{counter}</h1>
    <button onClick={()=>setcounter((prev)=> prev+1)} >Add</button>
    <button onClick={()=>setcounter((prev)=> prev-1)} >Dec</button>
    </>
  )
}

export default App
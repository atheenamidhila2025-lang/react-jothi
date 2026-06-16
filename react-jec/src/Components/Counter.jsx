import React from 'react'

const Counter = () =>{
        const[Count,setCount]=React.useState(0)

        const increment = () =>{
            setCount(Count+1)
        }

        const dec= () =>{
            setCount(Count-1)

        }
        const res= () =>{
            setCount(0)
        }
  return (
    <>
    <h1>Count App</h1>
    <h2>Count:{Count}</h2>
    <button onClick={increment}>Inc</button>
    <button onClick={dec}>Dec</button> 
    <button onClick={res}>Res</button></>
  )
}

export default Counter
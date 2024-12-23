import { useEffect, useState } from "react"

function Counter(initialValue=0){
    const [count,setCount]=useState(initialValue)
useEffect(()=>{
    console.log({count})
},{count})


    function handleIncrement(){
        setCount((c)=> c+1)
    }
    return(
        <div>
<h2>{count}</h2>
<button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default Counter
import { useState } from "react";

export function CounterDisplay(){
    const [count,setCount]=useState(0)
    const handleStart=()=>{
        setCount(count=>count+1)
    }
    return(
        <div>
            <p style={{fontSize:'50px', color:'red'}}>Count: {count}</p>
            <button onClick={handleStart}>Click to increment</button>
        </div>
    )
}
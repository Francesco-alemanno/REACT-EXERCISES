import { useState } from "react";
 export function useCounter( initialValue=0){
    const [counter, setCounter]= useState(initialValue)

     const handleCounterIncrement = ()=>{
        setCounter((c)=> c + 1)
    }

    const handleCounterDecrement = ()=>{
        setCounter((c)=> c - 1)
    }

    const handleCounterReset = ()=>{
        setCounter(initialValue)
    }
    return {
        counter: counter,
        onIncrement: handleCounterIncrement,
        onDecrement:handleCounterDecrement,
        onReset: handleCounterReset,
    }
}


   
  
    


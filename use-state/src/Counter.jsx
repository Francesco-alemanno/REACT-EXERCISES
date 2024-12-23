import { useState } from "react"
import CounterDisplay from "./CounterDisplay"

function Counter ({initialValue=0}){
    const [counter, setCounter]=useState(initialValue)
    function handleCounterIncrement(){
setCounter((c)=>c+1)
    }
    function handleCounterDecrement(){
        setCounter((c)=>c-1)
    }

    function handleReset(){
        setCounter(initialValue)
    }
    return (
        <>
        <CounterDisplay count={counter}></CounterDisplay>
        <button onClick={handleCounterIncrement}>increment</button>
        <button onClick={handleCounterDecrement}>decrement</button>
        <button onClick={handleReset}>reset</button>
        
        </>
    )
}

export default Counter

// meglio che sia passato tramite funzione perchè permette di passare il valore più aggiornato di counter mentre con un valore immediato potrebbe non farlo
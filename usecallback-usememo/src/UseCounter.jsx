import { useCallback, useState } from "react";

export function UseCounter(){
    const [count, setCounter]=useState(0)

    const increment= useCallback(()=>{
        setCounter((c) => c+1)
    }, [])

    const decrement= useCallback(()=>{
        setCounter((c) => c-1)
    }, [])

    const reset= useCallback(()=>{
        setCounter(0)
    }, [])

    return { count, increment, decrement, reset}
}
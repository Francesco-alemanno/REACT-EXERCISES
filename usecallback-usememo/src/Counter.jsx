export function Counter (){
    const [counter, reset, increment, decrement] =UseCounter()
    return(
        <div>
        <h1>Count: {counter}</h1>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </div>
        
    )
}
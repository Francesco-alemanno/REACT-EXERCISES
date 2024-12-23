export function MouseClicker (){

    function handleEventsName(event){
       console.log(event.target.name)
    }

    function handleEventsSrc(event){
       console.log(event.target.src)
    }
   return (
       <div>
           <button name="one" onClick={handleEventsName}>Click me!</button>
           <button name="two" onClick={handleEventsSrc}> <img src="example" alt=" example" width={24} height={24} /></button>

       </div>
   )
}
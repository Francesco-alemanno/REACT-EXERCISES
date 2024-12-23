import Button from "./Button"

function AlertClock(){
    function handleShowTime(){
        const now= new Date()
        alert(`The current time is ${now.toLocaleTimeString()}`)
    }
    return (
        <>
        <p>Click the button below to show the current time</p>
        <Button onClick={handleShowTime} title='Click me'></Button>
        </>
    )
}
export default AlertClock
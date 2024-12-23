import { useEffect, useState } from "react";

function Clock() {
   
    const [date, setDate] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        
        const intervalId = setInterval(() => {
            setDate(new Date().toLocaleTimeString()); 
        }, 1000);

       
        return () => {
            clearInterval(intervalId);
        };
    }, []); 

    return (
        <>
            <h2>Ora corrente: {date}</h2>
        </>
    );
}

export default Clock;

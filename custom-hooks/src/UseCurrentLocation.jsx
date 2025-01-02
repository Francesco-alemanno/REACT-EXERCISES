import { useEffect, useState } from "react";

export function UseCurrentLocation(){
    const [location, setLocation]=useState(null)
    const [error, setError]=useState(null)
    const [loading, setLoading]=useState(null)

    function getCurrentLocation(){
        setLoading(true)
        setError(null)
        if( navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (position)=> {
                    const {latidude, longitude}= position.coords;
                    setLocation({latidude, longitude})
                    setLoading(false)
                },
                (error)=>{
                    setError(errore.message)
                    setLoading(false)
                }
            )
        } else{
            setError('la geolocalizzazione non è supportata da questo browser')
            setLoading(false)
        }
    }

    
    return {location, getCurrentLocation, loading, error}
}
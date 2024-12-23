import { useEffect, useLayoutEffect, useState } from "react"

export function GitHubUser({username}){
const [data, setData]=useState(null)
const [loading, setLoading]=useState(false)
const [error,setError]=useState(null)
useEffect(()=>{
    setLoading(true)
 fetch(`https://api.github.com/users/${username}`)
.then(response=>{
if(response.status !== 200){
    setError(new Error('user not found'))
}

return response.json()
})
.then(json=>{

    setLoading(false)
    setData(json)
    console.log(json)
})
.catch(error=>{
    setError(error)
})

},[username])


    return(
        <div>



            {loading && <h1>Loading...</h1>}
            {error && <h1>Errore nel caricamento dei dati</h1>}
{data && <ul>
    <li>{data.name}</li></ul>}
        </div>
    )
}
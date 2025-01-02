import { useCounter } from "./UseCounter";

export function UseGithubUser(username){
const [error, setError]=useCounter(null)
const [loading, setLoading]=useCounter(false)
const [data, setData]=useCounter(null)

async function fetchGithubUser(username) {
    setLoading(true);
    setError(null)

    try{
        const response= await fetch(`https://api.github.com/users/${username}` )
        const json= await response.json()
if(response.status!=200){
    setError(new Error())
}
        setData(json)
    }
    catch(error){
setData(null)
        setError(error)
    } finally{
        setLoading(false)
    }
    
}

return {
    data, error, loading, onFetchUser: fetchGithubUser
}
}
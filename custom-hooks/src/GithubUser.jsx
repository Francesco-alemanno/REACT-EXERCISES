import { UseGithubUser } from "./UseGithubUser";

export function  GithubUser({username}){
const [data, error, loading, onFetchUser] =UseGithubUser(username)

function handleGetUserData(){
    onFetchUser(username)
}
return (
    <div>
        <button onClick={handleGetUserData}>Load user data</button>
        {loading && <h1>Loading...</h1>}
        {error && <h1>There is an error</h1>}
        {data && <h1>{data.name}</h1>}


    </div>
)
}
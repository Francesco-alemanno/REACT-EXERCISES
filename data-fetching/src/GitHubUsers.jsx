import { useState } from "react"
import { GitHubUser } from "./GitHubUser";
import useSWR from 'swr'
import { useGithubUsers } from "./useGithubUsers";



export function GitHubUsers (){

const {users,error,isLoading,  fetchGitubUser}=useGithubUsers(username)

function handleGetUserData(){
 fetchGitubUser 
}
  
  return <div>
  <button onClick={fetchGitubUser}>Refresh</button>
{isLoading&& <h3>Loading....</h3>}
{error && <h3>An error has occured</h3>}
{users && !error && <ul>
  {users.map(user=>(
    <li key={user.id}>{user.login}</li>
  ))}
  
  </ul>}
</div>


}
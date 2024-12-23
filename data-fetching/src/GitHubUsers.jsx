import { useState } from "react"
import { GitHubUser } from "./GitHubUser";

export function GitHubUsers (){
const [username,setUsername]=useState('')
const [search,setSearch]=useState('')

const handleSubmit = (e) => {
    e.preventDefault(); 
    setSearch(username); 
    setUsername(""); 
  };

    return(
        <div>
     
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Cerca il profilo"
        />
{search && <GitHubUser username={search} />}       
        <button type="submit">Search</button>
      </form>
      </div>
    )
}
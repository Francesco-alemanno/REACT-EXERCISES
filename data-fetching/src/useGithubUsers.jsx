import { useEffect, useLayoutEffect, useState } from "react"
import useSWR from "swr"
const fetcher=url=fetch(url).then((response)=>response.json)
export function GitHubUsers({username}){
 
    const {data, error,mutate}=useSWR(`https://api.github.com/${username}`,fetcher)
function fetchGithubUser(){
    mutate()
}
return{
    data, error, loading: !data && !error, fetchGithubUser,
}
}
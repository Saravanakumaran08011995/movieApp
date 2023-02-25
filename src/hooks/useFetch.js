import { useEffect, useState } from "react"


export const useFetch = (apiPath , queryTerm="") => {
    const [data,setData]= useState([])
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=e7ab31ff0a3acb99c05e57ef88d17d2e&query=${queryTerm}`
    useEffect(()=>{
        const fetchMovies = async ()=>{
          const response = await fetch(url);
          const json =  await response.json();
          setData(json.results)
        }
        fetchMovies()
      },[url])

  return (
        {data}
  )
}



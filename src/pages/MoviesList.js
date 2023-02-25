
import { useEffect } from "react"
import { useFetch, useTitle } from "../hooks"


import { Card } from "../components/Card"




export const MoviesList = ({apiPath, title}) => {
  const {data: movies} = useFetch(apiPath)
  useTitle(`${title}`)

    
  return (
    <main>
      <section className="max-w-7xl mx-auto pt-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie)=>(<Card key={movie.id} movie={movie}/>))}          
        </div>
      </section>
    </main>
  )
}

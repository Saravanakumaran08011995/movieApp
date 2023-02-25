import { useEffect } from "react"
import {Link} from "react-router-dom"

import PageNotFoundImg from "../assets/notFound.jpg"
import { Button } from "../components"

export const PageNotFound = () => {

  useEffect(()=>{
    document.title = `Page Not Found - MovieApp`
  },[])


  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4 ">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404 Oops! Page not found</p>
          <div className="flex justify-center my-4">
          <Link to="/">
              <Button>
                Back to MovieApp
              </Button>
          </Link>
          </div>
          <div className="max-w-lg">
            <img className="rounded" src={PageNotFoundImg} alt="404 Page not found" />
          </div>
        </div>
      </section>
    </main>
  )
}

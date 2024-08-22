import { useEffect, useMemo, useRef, useState } from 'react'
import {searchMovies} from '../services/movies.js'

// import withResults from '../mocks/with-results.json'
// import withoutResults from '../mocks/no-results.json'

export function useMovies({search, sort}) {
    // const [responseMovies, setResponseMovies] = useState([])
    const [movies , setMovies] = useState([])

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previousSearch = useRef(search) // para guardar la busqueda anterior 


    //movimos a services/movies.js
    const getMovies = useMemo(()=>{
      return async ({search}) => { 
        
        if (search === previousSearch.current) return 
        try {
          setLoading(true)
          setError(null)
          previousSearch.current = search
          
          const newMovies =  await searchMovies({search})
          
          setMovies(newMovies)
  
        } catch (e) {
          setError(e.message)
        } finally {
          setLoading(false)
        }
      }
    }, []) 

    useEffect(()=>{
      console.log('get Movies como se genera ada vez que se escribe')
    }, [getMovies])

    const sortedMovies = useMemo(()=>{
      console.log('memoSortedMovies')
      return sort 
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) 
      : movies
    }, [sort, movies])

    return {movies: sortedMovies, getMovies, loading}
} 
// movies tener la lista de peliculas
// getMovies una forma para recuperar la pelicula


// dentro de getMovies
// if(search){
//   // setResponseMovies(withResults)
//   fetch(`https://www.omdbapi.com/?apikey=8124c461&s=${search}`)
//     .then(res => res.json())
//     .then(data => setResponseMovies(data))

// } else 
// {
//   setResponseMovies(withoutResults)
// }
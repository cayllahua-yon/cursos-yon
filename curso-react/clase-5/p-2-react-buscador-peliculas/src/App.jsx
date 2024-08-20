import './App.css'
// import withoutResult from '../mocks/no-results.json'
import { useMovies } from '../hooks/useMovies'
import { Movies } from '../components/Movies'
import { useEffect, useRef, useState } from 'react'

function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(()=>{
    if (isFirstInput.current) {
      isFirstInput.current = search === '';
      return
    }

    // la validacion pasado a handleChange
    if (search == '') {
      setError('No se puede buscar una película vacía');
      return
    }
    if (search.match(/^\d+$/)) {
      setError('No se pude buscar una pelicula con un número')
      return
    }
    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, setSearch, error }
}


function App() {
  const {movies} = useMovies()
  // const inputRef = useRef()
const { search, setSearch, error } = useSearch()

  // const counter = useRef(0);
  // counter.current++ 
  // console.log(counter.current)
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // const inputElement = inputRef.current
    // const value = inputElement.value
    // console.log(value)  

    // const fields = new window.FormData(event.target);
    // const query = fields.get('query')
    // console.log(query)

    // const {query} = Object.fromEntries(new window.FormData(event.target))
    console.log(search)
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    // setQuery(event.target.value)
    if (newQuery.startsWith(' ')) return  // evitando dar espacio al inicio

    setSearch(newQuery)
    //validaciones
 
  }

  

  return (
    <>
      <header className='page'>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          {/* <input onChange={handleChange} value={query}  name='query' ref={inputRef} type="text" placeholder='Avenger, Star Wars ...' /> */}
          <input onChange={handleChange} value={search}  name='search' type="text" placeholder='Avenger, Star Wars ...' style={{border: '1px solid transparent' , borderColor: error ? 'red' : 'transparent'}} />
          {/* no controlado -> required pattern='' onValue */}
          <button  type='submit'>Buscar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>
      
      <main>
        {/* Aquí los resultados de busqueda */}
      
      <Movies movies={movies} />
        
      </main>
    </>
  )
}

export default App

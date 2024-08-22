// import withResults from '../mocks/with-results.json'
// import withoutResults from '../mocks/no-results.json'
// se cambio async await
const API_KEY = '8124c461'
export const searchMovies = async ({search}) => {
    if (search == '') return null

    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const data = await response.json()

        const movies = data.Search
  
        return movies?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
        }))
    
    } catch (error) {
        throw new Error('Error de busqueda de pelicula', error)
    }

}
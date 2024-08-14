// import { useEffect, useState } from 'react'
import './App.css'
// import { getRandomFact } from '../src/services/fact.js'

import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'
// import { Otros } from './Components/Otros.jsx'

// const CAT_EMDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_EMDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact?max_length=100'
// const CAT_ENDPOINT_IMAGEN_URL = `https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`

// Custom Hook  // estraer logica de la imagen
// Custom hook    Fact

//= ============================================================APP===========================

export function App () {
  // const [fact, setFact] = useState() // hecho numero

  // const prefijoUrl = useCatImage() // custom Hook
  const { fact, getRefreshRandomFact } = useCatFact()
  const { imageUrl, typeImage } = useCatImage({ fact }) // parametros Nombreados
  console.log(imageUrl)

  // Para cargar la imagen cada vez que tenemos una cita nueva

  const handleClick = async () => {
    // getRandomFact(setFact)
    // const newGetRandomFact = await getRandomFact()
    // setFact(newGetRandomFact)
    getRefreshRandomFact()
  }

  return (
    <main className=''>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Obtener nuevo Hecho</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={`Imagen extraida usando tres primeras palabras que son ${fact}`} />}
        {typeImage && <p>El tipo de imagen es : {typeImage}</p>}

        {/* <Otros /> */}

      </section>

    </main>
  )
}

import { useEffect, useState } from 'react'
import './App.css'

// const CAT_EMDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_EMDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact?max_length=100'
// const CAT_ENDPOINT_IMAGEN_URL = `https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`

export function App () {
  const [fact, setFact] = useState() // hecho numero
  const [imageUrl, setImageUrl] = useState()
  // no puedes usar React Query, SWR, axios, apollo

  useEffect(() => {
    fetch(CAT_EMDPOINT_RANDOM_FACT)
      .then(res => {
        if (!res.ok) throw new Error('No se ha podido recuperar la cita')
        return res.json()
      }
      )
      .then(data => {
        const { fact } = data
        setFact(fact) // al ver que la api, https://cataas.com voy usar otra api

        // const firstWord = fact.split(' ')[0]
        // const hola = [['hola'], ['mi'], ['peru'], ['ahora'], ['programando'], ['ok'], ['ahora']]
        // const firstWord = fact.split(' ').slice(0, 3).join(' ')

        // ....Aqui el codigo del segundo useEffect
      })
      // 1.catch((error) => { //si usamos axios mejor
    // si hay error con la respuesta
    // o con la peticion
    // })

    // async function getRandomFact () {
    //   const res = await fetch('CAT_EMDPOINT_RANDOM_FACT')
    //   const json = await res.json()
    //   setFact(json.fact)
    // }
    // getRandomFact()   979861314
  }, [])

  useEffect(() => {
    if (!fact) return

    // const threeFirstWords = fact.split(' ', 3).join(' ')

    // fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`)
    fetch('https://randomfox.ca/floof/')
      .then(res => res.json())
      .then(respuesta => {
        const { image } = respuesta
        // const typeImage = mimetype.split('/')[1]
        // setTypeImage(typeImage)

        // const newImgUrl = `https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red`
        setImageUrl(image)
      })
  }, [fact])

  return (
    <main className=''>
      <h1>App de gatitos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={`Imagen extraida usando tres primeras palabras que son ${fact}`} />}
      </section>
      {/* {typeImage && <p>Tipo de imagen es {typeImage}</p>} */}

    </main>
  )
}

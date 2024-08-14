import { useEffect, useState } from 'react'

export function useCatImage ({ fact }) {
  // return 'https://randomfox.ca/floof/'
  const [imageUrl, setImageUrl] = useState()
  const [typeImage, setTypeImage] = useState()

  // Para cargar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`)
    // fetch('https://randomfox.ca/floof/')
      .then(res => res.json())
      .then(respuesta => {
        const { mimetype } = respuesta
        const type = mimetype.split('/')[1] // obtenemos tipo de imagen pero la url le enviamos
        // console.log(typeImage)
        setTypeImage(type)
        setImageUrl(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red`)
      })
  }, [fact])

  return { imageUrl, typeImage }
}

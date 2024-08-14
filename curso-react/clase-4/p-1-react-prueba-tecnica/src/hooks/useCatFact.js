import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/fact'

export function useCatFact () {
  const [fact, setFact] = useState() // hecho

  const getRefreshRandomFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(getRefreshRandomFact, [])
  // para recuperar la cita al cargar la pagina
  // useEffect(() => {
  //   getRandomFact(setFact) // con then
  //   getRandomFact().then(setFact) // Las funciones como PARAMETRO
  // }, [])

  return { fact, getRefreshRandomFact }
}

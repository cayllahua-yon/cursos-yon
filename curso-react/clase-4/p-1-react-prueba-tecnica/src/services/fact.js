const CAT_EMDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact?max_length=100'

// No necesitamos usar el setState
export const getRandomFact = async () => {
  const res = await fetch(CAT_EMDPOINT_RANDOM_FACT)
  if (!res.ok) throw new Error('No se ha podido recuperar la cita')
  const data = await res.json()
  const { fact } = data
  return fact
}

// async / await

// export const getRandomFact = () => {
//   return fetch(CAT_EMDPOINT_RANDOM_FACT)
//     .then(res => {
//       if (!res.ok) throw new Error('No se ha podido recuperar la cita')
//       return res.json()
//     })
//     .then(data => {
//       const { fact } = data
//       return fact
//     })
// }

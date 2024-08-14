import { useCatImage } from '../hooks/useCatImage'

export function Otros () {
  const { imageUrl } = useCatImage({ fact: 'nuevo' })

  return (
    <>
      {imageUrl && <img src={imageUrl} />}
    </>
  )
}

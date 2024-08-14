import { useEffect, useState } from 'react'
import './App.css'


function App() {
  //window.addEventListener() //<--- No se pone, porque se va a renderizar SIEMPRE que se renderiza el componente.
  
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({x:0, y:0})

  useEffect(()=>{
    console.log('efecto', {enabled});

    const handleMove = (event) => {
      const {clientX, clientY} = event;
      setPosition({x: clientX, y: clientY})
      // console.log('handleMove', {clientX, clientY})
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove);
    }

    return () => {
       window.removeEventListener('pointermove', handleMove);
     }  // cuando ejecuto esto :: Para limpiar suscripciones, enviar una traza, para saber analitica, usuario cierra una modal
        // cunado el componente de desmonta
        // Cuando cambian las dependencias, antes de ejecutar el efecto de nuevo    -- clear useEffect -- limpiar 
      //===> Para ver los suscritos utilizamos -> getEventListeners(window)  //Solo funciona en chrome
  
      },[enabled])

  return (
    <main>
      <h3>
        Proyecto 3
      </h3>

        <div style={{
          position:'absolute',
          backgroundColor: '#09f',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          height: 40,
          width: 40,
          transform: `translate(${position.x}px, ${position.y}px)`

        }}>

        </div>

      <button onClick={()=> setEnabled(!enabled) }> { enabled ? 'Desactivar' : 'Activar'} Seguir Puntero</button>    
    
    
    </main>
  )
}

export default App

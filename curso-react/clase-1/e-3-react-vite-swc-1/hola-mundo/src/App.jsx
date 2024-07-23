import { useState } from "react"
import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"

export function App() {
    const [name, setName] = useState('cayllahua-yon')  // ESTO ES MALA PRACTICA-- YA QUE EL ESTADO INICIAL SE INICIALIZA SOLO UNA VEZ
    // const formatForUserName = (userName) => `@${userName}`; // esta funcion no se esta ejecutando aqui se esta pasando como tal...
    // const formatterUserName = (<span>@{userName}</span>); 
    // const formatterUserName = <span>@cayllahua-yon</span>; // lo que pasamos es un ELEMENTO
    // const cayllahua = {isFollowing: true, userName: 'cayllahua-yon'}
    // const luz = {isFollowing: true, userName: 'luz'}

    console.log('render with name:' , name)

    const [isFollowing, setIsFollowing] = useState(false)  // ESTO ES MALA PRACTICAS

    const users = [
        {
            userName: 'cayllahua-yon',
            name: 'Yon Cayllahua',
            isFollowing: true
        },
        {
            userName: 'luz',
            name: 'Luz Cayllahua',
            isFollowing: true
        },
        {
            userName: 'Eli',
            name: 'Eli Palomino',
            isFollowing: true
        },
        {
            userName: 'yon',
            name: 'Yon Utani',
            isFollowing: true
        },
    ]

    return(// NOta:: tambien podemos pasar como prom funciones
        // <article style={{display: 'flex', alignItems: 'center', color: '#fff'}}>
        <section className="App">

            {
                users.map((user)=>{
                    const {userName, name, isFollowing} = user;
                    return (
                        <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={isFollowing} >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }

            {/* <TwitterFollowCard formatterUserName={formatterUserName}  isFollowing={true} userName="cayllahua-yon" name="Yon Cayllahua Utani"   />         */}
            {/* <TwitterFollowCard number={[1,2,3]}  isFollowing={true} userName="cayllahua-yon" name="Yon Cayllahua Utani"   />         */}
            
            {/* <TwitterFollowCard  isFollowing={true} userName="cayllahua-yon" name="Yon Cayllahua Utani"   />        
            <TwitterFollowCard  isFollowing={false} userName="caylahua" name="Yon Cayllahua Utani"   />        
            <TwitterFollowCard  isFollowing userName="manuel" name="Manuel Utani"   />        
            <TwitterFollowCard  isFollowing userName="pedro" name="Pedro Utani"   />         */}
            
            {/* <TwitterFollowCard  isFollowing userName="cayllahua-yon" > 
                Yon Cayllahua Utani
            </ TwitterFollowCard>  */}
           
            
            {/* <TwitterFollowCard  userName="Luz" > 
                Luz
            </ TwitterFollowCard>  */}

            {/* <TwitterFollowCard  {...cayllahua} > 
                Yon Cayllahua Utani
            </ TwitterFollowCard> 
            
            <TwitterFollowCard   {...luz} > 
                Luz
            </ TwitterFollowCard>  */}
            
            {/* <TwitterFollowCard   userName={name} initialIsFollowing={isFollowing} > 
                Yon Cayllahua Utani
            </ TwitterFollowCard> 

            <TwitterFollowCard   userName="luz" initialIsFollowing={isFollowing} > 
                Luz
            </ TwitterFollowCard>  */}

            

            <button onClick={()=>{setName('palomino')}}>
                Cambiar Nombre de {name}
            </button>
            <button onClick={()=>{setIsFollowing(!isFollowing)}}>
                Cambiar App 
            </button>
        </section>
    )

} 

import portal from './portal-rick-and-morty.gif'
import { useEffect,useState } from 'react'
import axios from 'axios'
import CardDeJuego from './CardDeJuego'

const Juego=()=>{

    const [characters2,setCharacters2]= useState([])

    let d=0
    useEffect(()=>{
        
        mezclar();
    },[characters2])

    const barajar= async ()=>{
        
        for (let i = 0; i < 6; i++) {
            const id=Math.floor(Math.random()*400);
            const {data}= await axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-rubencorba`)
            setCharacters2((oldChars) => [...oldChars, data.image]);
            setCharacters2((oldChars) => [...oldChars, data.image]);
        }
    } 
    const mezclar= ()=>{
        if (d===0) {
            d=1
        const mezcladas=characters2.sort(()=>Math.random() - 0.5)
        setCharacters2(mezcladas)}
    }
    const reiniciar= ()=>{
        setCharacters2([])
    }

    const arrayDeObjetos=[
        {imagenFoto:characters2[0],id:1},
        {imagenFoto:characters2[1],id:2},
        {imagenFoto:characters2[2],id:3},
        {imagenFoto:characters2[3],id:4},
        {imagenFoto:characters2[4],id:5},
        {imagenFoto:characters2[5],id:6},
        {imagenFoto:characters2[6],id:7},
        {imagenFoto:characters2[7],id:8},
        {imagenFoto:characters2[8],id:9},
        {imagenFoto:characters2[9],id:10},
        {imagenFoto:characters2[10],id:11},
        {imagenFoto:characters2[11],id:12}
    ]





    
    
    return (
        <div>
                <div>
                    
                     {characters2.length!==0
                ?<button /* disabled={characters2.length===0} */ onClick={()=>reiniciar()}>reiniciar</button>
                :<button /* disabled={characters2.length!==0} */ onClick={()=>barajar()}>barajar</button>}

                        <div className="card-grid">
                        {characters2.length? (
                        arrayDeObjetos.map(({imagenFoto,id})=>{
                            return <CardDeJuego imagenFoto={imagenFoto} id={id}/>
                        })
                        ):(null)}
                        </div>
                        

                
                {/* {characters2.length? (
                    <div>
                            {bocaArriba===false?
                                (<button onClick={voltear}>
                                    <img src={imagen } alt={name} />
                                </button>):(<button onClick={voltear}> 
                                    (<img src={characters2[0]} alt="carta" />)
                                </button>)
                                }
                <img src={characters2[1]} alt="carta" />
                <img src={characters2[2]} alt="carta" />
                <img src={characters2[3]} alt="carta" />
                <img src={characters2[4]} alt="carta" />
                <img src={characters2[5]} alt="carta" />
                <img src={characters2[6]} alt="carta" />
                <img src={characters2[7]} alt="carta" />
                <img src={characters2[8]} alt="carta" />
                <img src={characters2[9]} alt="carta" />
                <img src={characters2[10]} alt="carta" />
                <img src={characters2[11]} alt="carta" />
                    </div>
                ):(
                    <div>
                        <img src={portal} alt={"portal"} />
                    </div>
                )} */}
                

                </div>          
            
            
            
        </div>
    )

}
export default Juego;
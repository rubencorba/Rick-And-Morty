import imagen from './perfilk2.jpg'
import portal from './portal-rick-and-morty.gif'
import { useEffect,useState } from 'react'
import axios from 'axios'

const Juego=(/* {barajar,characters2} */)=>{

    const [characters2,setCharacters2]= useState([])
    

    /* useEffect(() => {
        
        async function baraj(){
            for (let i = 0; i < 6; i++) {
                const id=Math.floor(Math.random()*500);
                const {data}= await axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-rubencorba`)
                setCharacters2((oldChars) => [...oldChars, data.image]);
                setCharacters2((oldChars) => [...oldChars, data.image]);
              }
              setCharacters2(characters2.sort(()=>Math.random() - 0.5))
              return;
        }
        characters2[11]?null:baraj();
        return setCharacters2([]);
     }, []); */

     useEffect(()=>{
        mezclar();
     },[characters2])

    const barajar= async ()=>{
        /* setCharacters2([]) */
        for (let i = 0; i < 6; i++) {
            const id=Math.floor(Math.random()*400);
            const {data}= await axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-rubencorba`)
            setCharacters2((oldChars) => [...oldChars, data.image]);
            setCharacters2((oldChars) => [...oldChars, data.image]);
            
        }
        /* setCharacters2(characters2.sort(()=>Math.random() - 0.5)) */
        
    } 
    const mezclar= ()=>{
        const mezcladas=characters2.sort(()=>Math.random() - 0.5)
        /* const mezcladas=characters2.sort((a, b)=> {if(a.id>b.id) return 1; else return -1})} */
        
        setCharacters2(mezcladas)
    }
    const reiniciar= ()=>{
        setCharacters2([])
        
    }
    
    
    return (
        <div>
                <div>
                    
                     {characters2.length!==0
                ?<button /* disabled={characters2.length===0} */ onClick={()=>reiniciar()}>reiniciar</button>
                :<button /* disabled={characters2.length!==0} */ onClick={()=>barajar()}>barajar</button>}
                {/* <button onClick={()=>mezclar()}>mezclar</button> */}
                {/* {characters2.map(({char})=>{return <img src={characters2[char]} alt="carta" />})} */}
                {/* <div className="flip-card">
                <div className="flip-card-inner">
                <div className="flip-card-front">
                   <img  src={imagen } alt="asd" />
                </div>
                <div className="flip-card-back">
                    <img src={characters2[0]} alt="carta" />
                </div>
                </div>
    
                </div> */}
                {characters2[0]? (
                    <div>
                        <img src={characters2[0]} alt="carta" />
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
                )}
                

                </div>
                
            {/* ):(
                <div>
                    <h1>Cargando Información...</h1>
                    <img src={portal} alt={"portal"} />
                </div>
            )} */}

            
            
            
            
        </div>
    )

}
export default Juego;
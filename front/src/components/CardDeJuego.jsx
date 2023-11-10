import { useEffect,useState } from 'react';
import imagen from './tapaCarta.jpeg'

const CardDeJuego=({imagenFoto,id})=>{

    const [bocaArriba,setBocaArriba]=useState(false)

    let b=0;
    const voltear=()=>{
        setBocaArriba(!bocaArriba)
        return
    }


    return (
        <div className='cardJuegoStyle'>
            
            {bocaArriba===false?
                                (<button2 onClick={voltear}>
                                    <img src={imagen} alt="RyM" width={200}/>
                                </button2>):(<button2 onClick={voltear}> 
                                    <img src={imagenFoto} alt="carta" width={200}/>
                                </button2>)
                                }
        </div>
    )
}
export default CardDeJuego;
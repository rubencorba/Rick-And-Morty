import { useEffect,useState } from 'react';
import imagen from './tapaCarta.jpeg'
import { useSelector,useDispatch } from "react-redux";
import { probarPar } from "../redux/action";

const CardDeJuego=({imagenFoto,id})=>{

    const dispatch = useDispatch();

    const cartasBocaArriba = useSelector((state) => state.cartasBocaArriba);

    const [bocaArriba,setBocaArriba]=useState(false)

    const voltear=()=>{
        dispatch(probarPar(imagenFoto,id))
        setBocaArriba(!bocaArriba)
        return
    }
    useEffect(()=>{
        
        if(!cartasBocaArriba.find((card)=>card.id==id)){setBocaArriba(false)}
    },[cartasBocaArriba])

    return (
        <div /* className='cardJuegoStyle' */>
            
            {bocaArriba===false?
                                (<button2 onClick={voltear}>
                                    <img className='cardJuegoStyle'src={imagen} alt="RyM" /* width={200} *//>
                                </button2>):(<button2 onClick={voltear}> 
                                    <img className='cardJuegoStyle'src={imagenFoto} alt="carta" /* width={200} *//>
                                </button2>)
                                }
        </div>
    )
}
export default CardDeJuego;
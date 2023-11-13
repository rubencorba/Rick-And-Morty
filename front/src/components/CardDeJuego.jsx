import { useEffect,useState } from 'react';
import imagen from './tapaCarta.jpeg'
import { useSelector,useDispatch } from "react-redux";
import { probarPar } from "../redux/action";

const CardDeJuego=({imagenFoto,id,key})=>{

    const dispatch = useDispatch();

    const cartasBocaArriba = useSelector((state) => state.cartasBocaArriba);

    const [bocaArriba,setBocaArriba]=useState(false)

    const voltear=()=>{
        setBocaArriba(!bocaArriba)
        setTimeout(()=>dispatch(probarPar(imagenFoto,id)),1000);
        return
    }
    useEffect(()=>{
        
        if(!cartasBocaArriba.find((card)=>card.id.ide==id.ide)){setBocaArriba(false)}
    },[cartasBocaArriba])

    return (
        <div /* className='cardJuegoStyle' */>
            
            {bocaArriba===false?
                                (<button2 onClick={voltear}>
                                    <img className='cardJuegoStyle'src={imagen} alt="RyM" />
                                </button2>):(<button2 /* onClick={voltear} */> 
                                    <img className='cardJuegoStyle'src={imagenFoto} alt="carta" />
                                </button2>)
                                }
        </div>
    )
}
export default CardDeJuego;
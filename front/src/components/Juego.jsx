import portal from './portal-rick-and-morty.gif'
import { useState } from 'react'
import CardDeJuego from './CardDeJuego'
import { useSelector,useDispatch } from "react-redux";
import festejo from './UKb9.gif'
import { getCharsByGame, reiniciarJuego } from "../redux/action";

const Juego=()=>{

    const dispatch = useDispatch();
    const [b,setB]= useState(0)


    const barajar= async ()=>{
        dispatch(getCharsByGame())
        setB(1);
    } 
    
    
    const reiniciar= ()=>{
        dispatch(reiniciarJuego())
        setB(0);
    }

    const cartasBocaArriba = useSelector((state) => state.cartasBocaArriba);
    const charsByGame = useSelector((state) => state.charsByGame);
    
    
    return (
        <div>
            {cartasBocaArriba.length<12?
            
                <div>
                    
                     {charsByGame.length!==0
                ?<button onClick={()=>reiniciar()}>reiniciar</button>
                :<button onClick={()=>barajar()}>barajar</button>}

                {b===1?(
                    <div>
                        <div className="card-grid">
                        {charsByGame.length===12? (
                        charsByGame.map(({image,id,key})=>{
                            return <CardDeJuego imagenFoto={image} id={id} />
                        })
                        ):null}
                        </div>
                        <div>
                            {charsByGame.length!==0?null:
                            <img src={portal} alt="portal" />}
                        </div>
                    </div> 
                ):null}

                </div>          
            :<div>
                <div>
                    {charsByGame.length!==0
                    ?<button onClick={()=>reiniciar()}>reiniciar</button>
                    :<button onClick={()=>barajar()}>barajar</button>}
                </div>
                <div>
                    <img className='festejoStyle' src={festejo} alt="festejo" />
                </div>
                
            </div>
            }
            
            
            
        </div>
    )

}
export default Juego;
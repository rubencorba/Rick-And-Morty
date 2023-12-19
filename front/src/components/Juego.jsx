
import portal from './portal-rick-and-morty.gif'
import { useEffect,useState } from 'react'
import axios from 'axios'
import CardDeJuego from './CardDeJuego'
import { useSelector,useDispatch } from "react-redux";
import festejo from './UKb9.gif'
import { getCharsByGame, reiniciarJuego } from "../redux/action";

const Juego=()=>{
    const dispatch = useDispatch();
    const [characters2,setCharacters2]= useState([])

    let d=0;
    useEffect(()=>{
        /* if (characters2.length===11) */ 
        /* setTimeout(mezclar(),3000) */
        /* if (d===0){
            d=1;
        } */
        /* mezclar(); */
    },[characters2])

    const barajar= async ()=>{
        dispatch(getCharsByGame())
        /* for (let i = 0; i < 6; i++) {
            const id=Math.floor(Math.random()*400);
            const {data}= await axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-rubencorba`)
            setCharacters2((oldChars) => [...oldChars, {image:data.image,id:{ide:data.id,key:i}}]);
            setCharacters2((oldChars) => [...oldChars, {image:data.image,id:{ide:data.id,key:i+1}}]);
        } */
    } 
    
    /* const mezclar= ()=>{
        
        const mezcladas=characters2.sort(()=>Math.random() - 0.5)
        setCharacters2(mezcladas)
    } */
    const reiniciar= ()=>{
        setCharacters2([])
        dispatch(reiniciarJuego())
    }

    const cartasBocaArriba = useSelector((state) => state.cartasBocaArriba);
    

    const charsByGame = useSelector((state) => state.charsByGame);
    
    
    return (
        <div>
            {cartasBocaArriba.length<12?
            
                <div>
                    
                     {/* characters2 */charsByGame.length!==0
                ?<button /* disabled={characters2.length===0} */ onClick={()=>reiniciar()}>reiniciar</button>
                :<button /* disabled={characters2.length!==0} */ onClick={()=>barajar()}>barajar</button>}

                        <div className="card-grid">
                        {/* characters2 */charsByGame.length===12? (
                        /* characters2 */charsByGame.map(({image,id,key})=>{
                            return <CardDeJuego imagenFoto={image} id={id} /* key={key} *//>
                        })
                        ):null}
                        </div>
                        <div>
                            {/* characters2 */charsByGame.length>1&&/* characters2 */charsByGame.length<12?
                            <img /* className='cardJuegoStyle' */src={portal} alt="portal" />:null}
                        </div>
                

                </div>          
            :<div>
                <div>
                    {/* characters2 */charsByGame.length!==0
                    ?<button /* disabled={characters2.length===0} */ onClick={()=>reiniciar()}>reiniciar</button>
                    :<button /* disabled={characters2.length!==0} */ onClick={()=>barajar()}>barajar</button>}
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
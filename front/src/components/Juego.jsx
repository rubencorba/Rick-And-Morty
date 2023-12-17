
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
        mezclar();
    },[characters2])

    const barajar= async ()=>{
        dispatch(getCharsByGame())
        for (let i = 0; i < 6; i++) {
            const id=Math.floor(Math.random()*400);
            const {data}= await axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-rubencorba`)
            setCharacters2((oldChars) => [...oldChars, {image:data.image,id:{ide:data.id,key:i}}]);
            setCharacters2((oldChars) => [...oldChars, {image:data.image,id:{ide:data.id,key:i+1}}]);
        }
    } 
    
    const mezclar= ()=>{
        /* if (d===0) {
            d=1 */
        const mezcladas=characters2.sort(()=>Math.random() - 0.5)
        setCharacters2(mezcladas)/* } */
    }
    const reiniciar= ()=>{
        setCharacters2([])
        dispatch(reiniciarJuego())
    }

    /* const arrayDeObjetos=[
        {imagenFoto:characters2[0].image, id:characters2[0].id,key:1},
        {imagenFoto:characters2[1].image,id:characters2[1].id,key:2},
        {imagenFoto:characters2[2].image,id:characters2[2].id,key:3},
        {imagenFoto:characters2[3].image,id:characters2[3].id,key:4},
        {imagenFoto:characters2[4].image,id:characters2[4].id,key:5},
        {imagenFoto:characters2[5].image,id:characters2[5].id,key:6},
        {imagenFoto:characters2[6].image,id:characters2[6].id,key:7},
        {imagenFoto:characters2[7].image,id:characters2[7].id,key:8},
        {imagenFoto:characters2[8].image,id:characters2[8].id,key:9},
        {imagenFoto:characters2[9].image,id:characters2[9].id,key:10},
        {imagenFoto:characters2[10].image,id:characters2[10].id,key:11},
        {imagenFoto:characters2[11].image,id:characters2[11].id,key:12}
    ] */


    const cartasBocaArriba = useSelector((state) => state.cartasBocaArriba);
    


    
    
    return (
        <div>
            {cartasBocaArriba.length<12?
            
                <div>
                    
                     {characters2.length!==0
                ?<button /* disabled={characters2.length===0} */ onClick={()=>reiniciar()}>reiniciar</button>
                :<button /* disabled={characters2.length!==0} */ onClick={()=>barajar()}>barajar</button>}

                        <div className="card-grid">
                        {characters2.length===12? (
                        characters2.map(({image,id,key})=>{
                            return <CardDeJuego imagenFoto={image} id={id} /* key={key} *//>
                        })
                        ):null}
                        </div>
                        <div>
                            {characters2.length>1&&characters2.length<12?
                            <img /* className='cardJuegoStyle' */src={portal} alt="portal" />:null}
                        </div>
                

                </div>          
            :<div>
                <div>
                    {characters2.length!==0
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
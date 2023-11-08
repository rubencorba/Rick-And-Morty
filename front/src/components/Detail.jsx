import axios from "axios";
import { useParams } from "react-router-dom";
import {useState,useEffect} from "react"
import portal from "./portal-rick-and-morty.gif"


const Detail=()=>{

    let {id}= useParams();

    const [character,setCharacter]=useState({})

    useEffect(() => {
        axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-rubencorba`).then(
           ({ data }) => {
              if (data.name) {
                 setCharacter(data);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           }
        );
        return setCharacter({});
     }, [id]);


    
    return(
        <div>
            {character.name? (
                <div className="detailStyle">
                    <div>
                    <img className="imgdetailStyle" src={character.image} alt={character.name}/>
                    </div>
                    <div className="detdetStyle">
                    <h1>Name: {character.name}</h1>
                    <h1>Especie: {character.species}</h1>
                    <h1>Status: {character.status}</h1>
                    <h1>Gender: {character.gender}</h1>
                    <h1>Origin: {character.origin.name}</h1>
                    </div>

                
                
            </div>
            ):(
                <div>
                    <h1>Cargando Información...</h1>
                    <img src={portal} alt={"portal"} />
                </div>
                
            )}
        </div>
        
    )
    
    
}
export default Detail;
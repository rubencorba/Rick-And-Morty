import axios from "axios";
import { useParams } from "react-router-dom";
import {useState,useEffect} from "react"


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
                <div>
                <h2>Nombre: {character.name}</h2>
                <h2>Especie: {character.species}</h2>
                <h2>Status: {character.status}</h2>
                <h2>Gender: {character.gender}</h2>
                <h2>Origin: {character.origin.name}</h2>
                <img src={character.image} width={800} alt={character.name}/>
            </div>
            ):(
                <h1>Cargando Información...</h1>
            )}
        </div>
        
    )
    
    
}
export default Detail;
import { Link } from "react-router-dom";
import { addFav,removeFav } from "../redux/action";

import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

const Card = ({id, name, status, gender, species, origin, image, onClose}) => {

   const myFavorites = useSelector((state) => state.allCharacters);
   const dispatch = useDispatch();

   /* const addFav_=()=>{
      dispatch(addFav({id, name, status, gender, species, origin, image, onClose}))
   }
   const removeFav_=()=>{
      dispatch(removeFav(id))
   }

   

   const handleFavorite=()=>{
      if (isFav){
         setIsfav(false);
         removeFav_();
      }else{
         setIsfav(true);
         addFav_();
      }
   } */
   const [isFav,setIsFav]= useState(false)
   
   const handleFavorite = () => {
      isFav ? dispatch(removeFav(id)) : dispatch(addFav({ id, name, status, gender, species, origin, image, onClose }))
      setIsFav(!isFav)
   };
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   

   return (
      <div className="flip-card">
         <div class="flip-card-inner">

         <div class="flip-card-front">
            <div className="card-button-container">
               {
                  isFav ? (
                     <button onClick={handleFavorite}>❤️</button>
                  ) : (
                     <button onClick={handleFavorite}>🤍</button>
                  )
               }
            </div>
            <button className="card-button-container2" onClick={()=>onClose(id)}>X</button>
            <Link to={`/detail/${id}`} >
               <img src={image } alt={name} />
            </Link>
         </div>

         <div class="flip-card-back">
            <h3 className="nombreDaCarta">Nombre: {name}</h3>
            <h5>Especie: {species}</h5>
            <h5>Status: {status}</h5>
            <h5>Gender: {gender}</h5>
            <h5>Origin: {origin}</h5>
         </div>
         
         </div>
      </div>
   );
};

export default Card;

import { Link } from "react-router-dom";
import { addFav,removeFav } from "../redux/action";

import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

const Card = ({id, name, status, gender, species, origin, image, onClose}) => {

   const myFavorites = useSelector((state) => state.allCharacters);
   const dispatch = useDispatch();

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
               <img class="imageDaCarta" src={image } alt={name} />
         </div>

         <div class="flip-card-back">
            <button className="card-button-container2" onClick={()=>onClose(id)}>X</button>
            <div>
               {
                  isFav ? (
                     <button className="circle" onClick={handleFavorite}>❤️</button>
                  ) : (
                     <button className="circle" onClick={handleFavorite}>🤍</button>
                  )
               }
            </div>
            <Link to={`/detail/${id}`} >
               <h3 className="nombreDaCarta">Name: {name}</h3>
            </Link>
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

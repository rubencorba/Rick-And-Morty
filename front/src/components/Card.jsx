import { Link } from "react-router-dom";
import { addFav,removeFav } from "../redux/action";

import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

const Card = ({id, name, status, gender, species, origin, image, onClose}) => {

   const myFavorites = useSelector((state) => state.myFavorites);
   const dispatch = useDispatch();

   const addFav_=()=>{
      dispatch(addFav({id, name, status, gender, species, origin, image, onClose}))
   }
   const removeFav_=()=>{
      dispatch(removeFav(id))
   }

   const [isFav,setIsfav]= useState(false)

   const handleFavorite=()=>{
      if (isFav){
         setIsfav(false);
         removeFav_();
      }else{
         setIsfav(true);
         addFav_();
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsfav(true);
         }
      });
   }, [myFavorites]);
   

   return (
      <div>
         <div>
            {
               isFav ? (
                  <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
               )
            }
         </div>
         <button onClick={()=>onClose(id)}>X</button>
         <Link to={`/detail/${id}`} >
            <h3 className="card-name">{name}</h3>
         </Link>
         <h2>Nombre: {name}</h2>
         <h2>Especie: {species}</h2>
         <h2>Status: {status}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin}</h2>
         <img src={image } alt={name} />
      </div>
   );
};

export default Card;

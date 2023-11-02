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
      <div className="card-container">
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
            {/* <h3 className="card-name">{name}</h3> */}
            <img src={image } alt={name} />
         </Link>
         <h5 className="nombreDaCarta">Nombre: {name}</h5>
         {/* <h5>Especie: {species}</h5>
         <h5>Status: {status}</h5>
         <h5>Gender: {gender}</h5>
         <h5>Origin: {origin}</h5> */}
         
      </div>
   );
};

export default Card;

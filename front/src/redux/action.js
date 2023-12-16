import {ADD_FAV,REMOVE_FAV,FILTER,ORDER,PROBAR,REINICIAR_JUEGO} from './actions-types'
import axios from 'axios';

/* export const addFav=(personaje)=>{
    return {type:ADD_FAV, payload:personaje}
} */
export const addFav = (character) => {
   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav';
      return async (dispatch) => {
         const {data}= await axios.post(endpoint, character);
            return dispatch({
               type: 'ADD_FAV',
               payload: data,
            });
         };
      
   } catch (error) {
      console.log(error);
   }
 };


export const removeFav = (id) => {
   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
      return async (dispatch) => {
         const {data}= await axios.delete(endpoint)
            return dispatch({
               type: 'REMOVE_FAV',
               payload: data,
         });
      };
      
   } catch (error) {
      console.log(error);
   }
 };

export const FilterCards=(gender)=>{
    return {type:FILTER, payload:gender}
}
export const OrderCards=(orden)=>{
    return {type:ORDER, payload:orden}
}

export const probarPar=(imagen,id)=>{
   return {type:PROBAR, payload:{imagen:imagen, id:id}}
}

export const reiniciarJuego=()=>{
   return {type:REINICIAR_JUEGO}
}
import {FILTER,ORDER,ADD_FAV,REMOVE_FAV,REINICIAR_JUEGO,GET_CHARS_GAME} from './actions-types'
import axios from 'axios';


const API_URL = "https://rym2.up.railway.app/api/character";
const API_KEY = "pi-rubencorba";

export const addFav = (character) => ({
  type: ADD_FAV,
  payload: character,
});

export const removeFav = (id) => ({
  type: REMOVE_FAV,
  payload: id,
});

export const FilterCards = (gender) => ({
  type: FILTER,
  payload: gender,
});

export const OrderCards = (order) => ({
  type: ORDER,
  payload: order,
});

export const reiniciarJuego=()=>{
   return {type:REINICIAR_JUEGO}
}


export const getCharsByGame = () => {
  return async (dispatch) => {
    try {
      // Generar 6 IDs aleatorios únicos
      const ids = Array.from({ length: 6 }, () => Math.floor(Math.random() * 400));

      // Hacer todas las requests en paralelo
      const responses = await Promise.all(
        ids.map((id) => axios.get(`${API_URL}/${id}?key=${API_KEY}`))
      );

      // Extraer los datos y duplicar cada personaje
      const chars = responses.flatMap(({ data }, i) => [
        { image: data.image, id: { ide: data.id, key: i + 1 } },
        { image: data.image, id: { ide: data.id, key: i + 1 } },
      ]);

      // Mezclar aleatoriamente
      const mezcladas = chars.sort(() => Math.random() - 0.5);

      dispatch({
        type: GET_CHARS_GAME,
        payload: mezcladas,
      });
    } catch (error) {
      console.error("Error al obtener personajes:", error.message);
    }
  };
};
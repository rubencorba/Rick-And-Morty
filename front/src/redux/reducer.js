import {
    ADD_FAV,
    REMOVE_FAV,
    FILTER,
    ORDER,
    PROBAR,
    REINICIAR_JUEGO,
    GET_CHARS_GAME,
} from "./actions-types";

const savedFavs = (() => {
    try {
        return JSON.parse(localStorage.getItem("favorites")) || [];
    } catch {
        return [];
    }
})();

const initialState = {
    myFavorites: savedFavs,
    allCharacters: savedFavs,
    cartasBocaArriba: [],
    cartaArriba: null,
    charsByGame: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV: {
            // Evitar duplicados
            const exists = state.myFavorites.some((c) => c.id === action.payload.id);
            if (exists) return state;

            const newFavs = [...state.myFavorites, action.payload];
            // Mantener allCharacters sincronizado (si esa era la intención)
            const newAll = [...state.allCharacters, action.payload];

            // Persistir (opcional)
            try {
                localStorage.setItem("favorites", JSON.stringify(newFavs));
            } catch { }

            return {
                ...state,
                myFavorites: newFavs,
                allCharacters: newAll,
            };
        }

        case REMOVE_FAV: {
            const newFavs = state.myFavorites.filter((char) => char.id !== action.payload);
            const newAll = state.allCharacters.filter((char) => char.id !== action.payload);

            try {
                localStorage.setItem("favorites", JSON.stringify(newFavs));
            } catch { }

            return {
                ...state,
                myFavorites: newFavs,
                allCharacters: newAll,
            };
        }

        case FILTER: {
            if (action.payload === "All") {
                return {
                    ...state,
                    myFavorites: [...state.allCharacters],
                };
            }
            return {
                ...state,
                myFavorites: state.allCharacters.filter((pers) => pers.gender === action.payload),
            };
        }

        case ORDER: {
            const sorted = [...state.myFavorites].sort((a, b) => {
                if (action.payload === "Ascendente") return a.id - b.id;
                return b.id - a.id;
            });
            return {
                ...state,
                myFavorites: sorted,
            };
        }
        case PROBAR:
            if (state.cartaArriba === null) {
                return {
                    ...state,
                    cartaArriba: action.payload,
                    cartasBocaArriba: [...state.cartasBocaArriba, action.payload]
                }
            }
            else {
                if (state.cartaArriba.id.ide === action.payload.id.ide) {
                    return ({
                        ...state,
                        cartasBocaArriba: [...state.cartasBocaArriba, action.payload],
                        cartaArriba: null
                    })
                } else {
                    return ({
                        ...state,
                        cartasBocaArriba: state.cartasBocaArriba.filter((card) => card.id.ide !== state.cartaArriba.id.ide),
                        cartaArriba: null
                    })
                }
            }
        case REINICIAR_JUEGO:
            return {
                ...state,
                cartasBocaArriba: [],
                cartaArriba: null,
                charsByGame: []
            }
        case GET_CHARS_GAME:
            return { ...state, charsByGame: action.payload }
        default:
            return { ...state }
    }
}
import {ADD_FAV,REMOVE_FAV,FILTER,ORDER} from "./actions-types";



const initialState={
    myFavorites: [],
    allCharacters: []
}


export const reducer= (state=initialState,action)=>{
    switch(action.type){
        case ADD_FAV:
            return ({
                ...state,allCharacters: [...state.allCharacters,action.payload],
                myFavorites: state.allCharacters
            })
        case REMOVE_FAV:
            return ({
                /* Cambié favorites por allCharacters */
                ...state,allCharacters:state.allCharacters.filter((pers)=>pers.id != action.payload),
                myFavorites: state.allCharacters
            })
        case FILTER:
            if (action.payload=="All"){
                return {...state,myFavorites: state.allCharacters}
            }
            return ({
                ...state,myFavorites: state.allCharacters.filter((pers)=>pers.gender == action.payload)
            })
        case ORDER:
            if(action.payload=="Ascendente"){
                return {...state,myFavorites:state.myFavorites.sort((a, b)=> {if(a.id>b.id) return 1; else return -1})}
            }else {return {...state,myFavorites:state.myFavorites.sort((a, b)=> {if(a.id>b.id) return -1; else return 1})}}
        default:
            return {...state}
    }
}
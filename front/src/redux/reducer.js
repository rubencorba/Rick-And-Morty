import {ADD_FAV,REMOVE_FAV} from "./actions-types";



const initialState={
    myFavorites: []
}


export const reducer= (state=initialState,action)=>{

    


    switch(action.type){
        case ADD_FAV:
            return ({
                ...state,myFavorites: [...state.myFavorites,action.payload]
            })
        case REMOVE_FAV:
            return ({
                ...state,myFavorites:state.myFavorites.filter((pers)=>pers.id != action.payload)
            })    
        default:
            return {...state}
    }
}
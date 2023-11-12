import {ADD_FAV,REMOVE_FAV,FILTER,ORDER,PROBAR} from "./actions-types";



const initialState={
    myFavorites: [],
    allCharacters: [],

    cartasBocaArriba:[]

}


export const reducer= (state=initialState,action)=>{
    switch(action.type){
        case ADD_FAV:
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };
        /* case REMOVE_FAV:
            return ({
                ...state, myFavorites: state.myFavorites.filter((pers)=>pers.id != action.payload),
                allCharacters: state.allCharacters.filter((pers)=>pers.id != action.payload)
            }) */
        case REMOVE_FAV:
            return { ...state, myFavorites: action.payload, allCharacters: action.payload  }; //No hicieron cambios en allCharacters
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
        
        case PROBAR:
            if(state.cartasBocaArriba.length===3){return {...state,cartasBocaArriba: []}}
            return ({
                ...state,cartasBocaArriba:[...state.cartasBocaArriba,action.payload]
            })    
        
        default:
            return {...state}
    }
}
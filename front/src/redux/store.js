import {createStore, applyMiddleware, compose} from 'redux';
import { reducer}  from './reducer.js';

//copiado *

import thunkMiddleware from 'redux-thunk'


const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta linea

export const store = createStore(
    reducer,
    composeEnhacer(applyMiddleware(thunkMiddleware))); // Esta linea nos permite hacer petic

  


/* export default store */

// *


/* const Store=createStore(reducer);

export default Store; */
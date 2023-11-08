import { useSelector,useDispatch } from "react-redux";
import Card from "./Card";
import {FilterCards,OrderCards} from '../redux/action'
import { useState } from "react";

const Favorites =({onClose})=>{

    const myFavorites = useSelector((state) => state.myFavorites);
    
    const dispatch = useDispatch();

    const [aux,setAux]= useState(false);

    const handleOrder=(event)=>{
      setAux(!aux);
      dispatch(OrderCards(event.target.value))
    }
    const handleFilter=(event)=>{
      dispatch(FilterCards(event.target.value))
    }
    

    return (
            <>
            <select onChange={handleOrder}>
               <option value="Ascendente">Ascendente</option>
               <option value="Descendente">Descendente</option>
            </select>
            <select onChange={handleFilter}>
               <option value="All">All</option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Genderless">Genderless</option>
               <option value="unknown">unknown</option>
            </select>
            <div className="card-container">
               {
                  myFavorites.map(({id, name, status, species, gender, origin, image})=>{
                     return  <Card
                     key={id}
                     name={name}
                     status={status}
                     species={species}
                     gender={gender}
                     image={image}
                     origin={origin.name}
                     onClose={()=>onClose(id)}
                     id ={id}
                     />
                  })
               }
      
            </div>
            </>
    )
}
export default Favorites




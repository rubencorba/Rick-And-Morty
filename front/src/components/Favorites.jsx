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
            <div >
               <div className="orderStyle" >
                  <select className="selectStyle" onChange={handleOrder}>
                     <option value="Ascendente">Ascendente</option>
                     <option value="Descendente">Descendente</option>
                  </select>
                  <select className="selectStyle" onChange={handleFilter}>
                     <option value="All">All</option>
                     <option value="Male">Male</option>
                     <option value="Female">Female</option>
                     <option value="Genderless">Genderless</option>
                     <option value="unknown">unknown</option>
                  </select>
               </div>
            <div className="card-grid">
               {
                  myFavorites.map(({id, name, status, species, gender, origin, image})=>{
                     return  <Card
                     key={id}
                     name={name}
                     status={status}
                     species={species}
                     gender={gender}
                     image={image}
                     origin={origin}
                     onClose={()=>onClose(id)}
                     id ={id}
                     />
                  })
               }
      
            </div>
            </div>
    )
}
export default Favorites




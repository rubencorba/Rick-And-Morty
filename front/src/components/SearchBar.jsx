
import { useState } from 'react';


const SearchBar = ({onSearch})=> {

   const [id,setId]= useState('');

   const handleChange= (event)=> {
      setId(event.target.value);
   }
   const resetInput = () => {
      setId('');
   }

   return (
      <div>
         <input type='search' value={id} onChange={handleChange} /> 
         <button onClick= {()=>{onSearch(id);resetInput()}}>Agregar</button> 
      </div>
   );
};

export default SearchBar;

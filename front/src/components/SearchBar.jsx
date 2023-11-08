
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
         <input className='searchStyle' type='search' value={id} onChange={handleChange} placeholder='Introduzca ID'/> 
         <button className='agregarStyle' onClick= {()=>{onSearch(id);resetInput()}}>Agregar</button> 
      </div>
   );
};

export default SearchBar;

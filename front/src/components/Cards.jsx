import Card from './Card';
//Agregué id como parametro por consigna 4 ej6
const Cards = ({characters,onClose})=> {
   return(
      <div>
         {
            characters.map(({id, name, status, species, gender, origin, image})=>{
               return  <Card
               key={id}
               name={name}
               status={status}
               species={species}
               gender={gender}
               image={image}
               origin={origin.name}
               /* Cambié lo del comentario */
               onClose={()=>onClose(id)} /* window.alert('Emulamos que se cierra la card') */
               id ={id}
               />
            })
         }

      </div>
   )
};

export default Cards;

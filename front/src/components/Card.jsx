const Card = ({id, name, status, gender, species, origin, image, onClose}) => {
   return (
      <div>
         {/* agregué id por lo mismo que Cards */}
         <button onClick={()=>onClose(id)}>X</button>
         <h2>Nombre: {name}</h2>
         <h2>Especie: {species}</h2>
         <h2>Status: {status}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin}</h2>
         <img src={image } alt={name} />
      </div>
   );
};

export default Card;

//
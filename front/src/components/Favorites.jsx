import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";

const Favorites =()=>{

    const myFavorites = useSelector((state) => state.myFavorites);

    return (
            <div>
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
    )
}
export default Favorites




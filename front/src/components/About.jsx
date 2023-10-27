import perfil from './paPerfilp.jpg'
import Card from './Card'

const About=()=>{
    const me={
        id:0,
        name:'Rubén Corbalán',
        status:'alive',
        species:'human',
        gender: 'male',
        origin:{
            name:'Earth (C-137)'
        },
        image: perfil
    }
    return(

        <div>
            <Card
             key={me.id}
             name={me.name}
             status={me.status}
             species={me.species}
             gender={me.gender}
             image={me.image}
             origin={me.origin.name}
             onClose={()=>onClose(id)}
             id ={me.id}
             />
        </div>
    )
};
export default About;
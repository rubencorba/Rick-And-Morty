import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import axios from 'axios'

//import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
//import SearchBar from './components/SearchBar.jsx';
//import characters, { Rick } from './data.js';
import Nav from './components/Nav';

import {Routes,Route,useLocation,useNavigate} from 'react-router-dom'
import About from './components/About.jsx'
import Detail from './components/Detail'
import Error from './components/Error'
import Form from './components/Form'

const example = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  gender: 'Male',
  origin: {
     name: 'Earth (C-137)',
     url: 'https://rickandmortyapi.com/api/location/1',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};






function App() {

  const [characters,setCharacters]= useState([])

  /* const onSearch= ()=> {
    return (
      setCharacters(characters.concat(example))
    );
  } */

  const onClose= (id)=>{
    const resul= characters.filter((personaje)=> personaje.id!==Number(id));
    setCharacters(resul);
  }

const navigate = useNavigate();
const [access, setAccess] = useState(false);
const EMAIL = 'rubencorba@gmail.com';
const PASSWORD = '1234567';

function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}
useEffect(() => {
  !access && navigate('/');
}, [access]);

  const onSearch=(id)=> {
    let b=0;
    axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-rubencorba`).then(
       ({ data }) => {
        characters.forEach((personaje) => personaje.id==id? b=1:b=0);
        if (b==1){
          alert("Ya existe");
        }else{
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
        }
          
       }
    );
 }

 let location=useLocation();
  return (
    <div>
      {/* Lo que está dentro de Nav lo agregué */}
      {location.pathname!=='/'? (<Nav onSearch={onSearch}/>):(<>Welcome</>)}
      {/* <Nav onSearch={onSearch}/> */}
      {/* <Cards characters={characters} onClose={onClose}/> */}
      {/* <Card
        id={Rick.id}
        name={Rick.name}
        status={Rick.status}
        species={Rick.species}
        gender={Rick.gender}
        origin={Rick.origin.name}
        image={Rick.image}
        onClose={() => window.alert('Emulamos que se cierra la card')} /> */}
          
      
      <Routes>
          <Route path='/' element={<Form login={login}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/*' element={<Error/>}/>
      </Routes>

        
        
    </div>
  )

  
}



export default App

//path='*' para que se muestre en todas las rutas
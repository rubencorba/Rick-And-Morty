import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import axios from 'axios'
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';

import {Routes,Route,useLocation,useNavigate} from 'react-router-dom'
import About from './components/About.jsx'
import Detail from './components/Detail'
import Error from './components/Error'
import Form from './components/Form'
import Favorites from './components/Favorites'

import { removeFav } from "./redux/action"
import { useDispatch } from "react-redux";


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

  const dispatch = useDispatch(); 

  const [characters,setCharacters]= useState([])

  const onClose= (id)=>{
    const resul= characters.filter((personaje)=> personaje.id!==Number(id));
    setCharacters(resul);
    dispatch(removeFav(id)) //Luego revisar si estaba bien 
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

 let location=useLocation();  //const {pathname} = useLocation()
  return (
    <div>
    
      {location.pathname!=='/'? (<Nav onSearch={onSearch}/>):(<>Welcome</>)}
      {/* //{pathname !== '/' && <Nav onSearch={onSearch}/>} */}
      
      <Routes>
          <Route path='/' element={<Form login={login}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/*' element={<Error/>}/>
      </Routes>
        
    </div>
  )

  
}



export default App

//path='*' para que se muestre en todas las rutas
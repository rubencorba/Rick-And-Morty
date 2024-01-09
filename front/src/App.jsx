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
import Juego from './components/Juego.jsx'

import { removeFav } from "./redux/action"
import { useDispatch } from "react-redux";

function App() {

  const dispatch = useDispatch(); 

  const [characters,setCharacters]= useState([])

  const onClose= (id)=>{
    const resul= characters.filter((personaje)=> personaje.id!==Number(id));
    setCharacters(resul);
    dispatch(removeFav(id));
  }

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

const login= async (userData)=> {
  try {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    const {data}= await axios(URL + `?email=${email}&password=${password}`)
    const { access } = data;
    setAccess(access);
    access && navigate('/home');
    
  } catch (error) {
    throw new Error('Error!');
  }
  
}

useEffect(() => {
  !access && navigate('/');
}, [access]);

const onSearch= async (id)=> {
    try {
      let b=0;
      const {data}= await axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-rubencorba`)
      characters.map((personaje) => personaje.id===Number(id)? b=1:null);
      if (b==1){
        alert("Este personaje ya se encuentra en pantalla");
      }else{
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('¡No hay personajes con este ID!');
       }
      }
      
    } catch (error) {
      throw new Error('Error!');
    }
}

 



 let location=useLocation();  //const {pathname} = useLocation()
  return (
    <div>
    
      {/* {location.pathname!=='/'? (<Nav onSearch={onSearch}/>):(<>Welcome</>)} */}
      {location.pathname !== '/' && <Nav onSearch={onSearch}/>}
      
      <Routes>
          <Route path='/'  element={<Form login={login}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/favorites' element={<Favorites onClose={onClose}/>}/>
          <Route path='/juego' element={<Juego /* barajar={barajar} characters2={characters2} *//>}/>
          <Route path='*' element={<Error/>}/>
      </Routes>
        
    </div>
  )

  
}



export default App

//path='*' para que se muestre en todas las rutas
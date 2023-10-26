import SearchBar from "./SearchBar";
import {Link} from 'react-router-dom'

const Nav= ({onSearch})=>{
    return (
        
        <div>
            <Link to='/About'>
                <button>About</button>
            </Link>
            <Link to='/Home'>
                <button>Home</button>
            </Link>
            <Link to='/favorites'>
                <button>Favorites</button>
            </Link>
            <Link to='/'>
                <button>LogOut</button>
            </Link>


            {/* <button onClick={()=><Link to='/Home'/>}>Home</button> */}
            <SearchBar onSearch={onSearch} /* onSearch={(characterID) => window.alert(characterID)} */ />
            <button  onClick={()=>onSearch(Math.floor(Math.random()*826))}>Agregar personaje random</button>
        </div>
        )
}
export default Nav;
import SearchBar from "./SearchBar";
import {Link} from 'react-router-dom'

const Nav= ({onSearch})=>{
    return (
        
        <div className="navStyle">
            <Link className="aboutStyle" to='/About'>
                <button>About</button>
            </Link>
            <Link className="homeStyle" to='/Home'>
                <button>Home</button>
            </Link>
            <Link className="favoritesStyle" to='/favorites'>
                <button>Favorites</button>
            </Link>


            
            <Link  className="juegoStyle" to='/juego'>
                <button2>Jugar!!</button2>
            </Link>

            <SearchBar onSearch={onSearch}  />
            <button  className="randomStyle" onClick={()=>onSearch(Math.floor(Math.random()*826))}>Random</button>
            <Link className="logOutStyle" to='/'>
                <button>LogOut</button>
            </Link>
        </div>
        )
}
export default Nav;
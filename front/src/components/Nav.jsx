import SearchBar from "./SearchBar";
import {Link} from 'react-router-dom'

const Nav= ({onSearch})=>{
    return (
        
        <div class="navStyle">
            <Link class="aboutStyle" to='/About'>
                <button>About</button>
            </Link>
            <Link class="homeStyle" to='/Home'>
                <button>Home</button>
            </Link>
            <Link class="favoritesStyle" to='/favorites'>
                <button>Favorites</button>
            </Link>


            
            <SearchBar onSearch={onSearch}  />
            <button  class="randomStyle" onClick={()=>onSearch(Math.floor(Math.random()*826))}>Random</button>
            <Link class="logOutStyle" to='/'>
                <button>LogOut</button>
            </Link>
        </div>
        )
}
export default Nav;
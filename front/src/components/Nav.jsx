import SearchBar from "./SearchBar";
//agregué la prop onSearch
const Nav= ({onSearch})=>{
    return (
        
        <div>
            <SearchBar onSearch={onSearch} /* onSearch={(characterID) => window.alert(characterID)} */ />
            <button  onClick={()=>onSearch(Math.floor(Math.random()*826))}>Agregar personaje random</button>
        </div>
        )
}
export default Nav;
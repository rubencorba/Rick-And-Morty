import imagen from './perfilk2.jpg'

const Juego=({barajar,characters2})=>{
    
    return (
        <div>

            <h1>probando</h1>
            <button onClick={()=>barajar()}>barajar</button>
            {/* {characters2.map(({char})=>{return <img src={characters2[char]} alt="carta" />})} */}
            {/* <div className="flip-card">
            <div className="flip-card-inner">
            <div className="flip-card-front">
               <img  src={imagen } alt="asd" />
            </div>
            <div className="flip-card-back">
                <img src={characters2[0]} alt="carta" />
            </div>
            </div>

            </div> */}
            <img src={characters2[0]} alt="carta" />
            <img src={characters2[1]} alt="carta" />
            <img src={characters2[2]} alt="carta" />
            <img src={characters2[3]} alt="carta" />
            <img src={characters2[4]} alt="carta" />
            <img src={characters2[5]} alt="carta" />
            <img src={characters2[6]} alt="carta" />
            <img src={characters2[7]} alt="carta" />
            <img src={characters2[8]} alt="carta" />
            <img src={characters2[9]} alt="carta" />
            <img src={characters2[10]} alt="carta" />
            <img src={characters2[11]} alt="carta" />
            
            
            
        </div>
    )

}
export default Juego;
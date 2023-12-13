const getChars= async (req,res)=>{


    try {
        for (let i = 0; i < 6; i++) {
            const id=Math.floor(Math.random()*400);
            /* const {data}= await axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-rubencorba`) */
            const {data}= await axios(`https://rickandmortyapi.com/api/character/${id}`)
            setCharacters2((oldChars) => [...oldChars, {image:data.image,id:{ide:data.id,key:i}}]);
            setCharacters2((oldChars) => [...oldChars, {image:data.image,id:{ide:data.id,key:i+1}}]);
        }
        

            return res.status(200).json(character)

    } catch (error) {
        (error)=> res.status(500).send(error.message)
    }
        
        
        
}
module.exports={getChars}
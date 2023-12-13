const getChars= async (req,res)=>{


    for (let i = 0; i < 6; i++) {
        const id=Math.floor(Math.random()*400);
        const {data}= await axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-rubencorba`)
        setCharacters2((oldChars) => [...oldChars, {image:data.image,id:{ide:data.id,key:i}}]);
        setCharacters2((oldChars) => [...oldChars, {image:data.image,id:{ide:data.id,key:i+1}}]);
    }
    /* try {
        const {id} =req.params;
        const {data}=await axios.get(`https://rym2.up.railway.app/api/character/${id}?key=pi-rubencorba`)
        
        if (data.name){
            const character ={
                id: data.id,
                name: data.name,
                status: data.status,
                origin: data.origin,
                species: data.species,
                image: data.image,
                gender: data.gender
            }
            return res.status(200).json(character)
        }
        return res.status(404).send('Not found')
    } catch (error) {
        (error)=> res.status(500).send(error.message)
    } */
        
        
        
}
module.exports={getChars}
/* 

const getCharById=(res,id)=>{
    axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({data})=>{const character={
            id: data.id,
            name: data.name,
            status: data.status,
            gender: data.gender,
            origin: data.origin,
            species: data.species,
            image: data.image
        }
        res.writeHead(200,{'Content-Type':'application/json'})
        .end(JSON.stringify(character))
    })
        .catch(res
            .writeHead(500,{'Content-Type':'text/plain'})
            .end(JSON.stringify({error:error.message}))
        )
}

 */

let axios = require('axios');


const getCharById= async (req,res)=>{
    try {
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
    }
        
        
        
}

module.exports={
    getCharById
}
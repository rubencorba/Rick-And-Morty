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


const getCharById=(req,res)=>{
    const {id} =req.params;
    axios.get(`https://rym2.up.railway.app/api/character/${id}?key=pi-rubencorba`)
        .then((character)=>character.data)
        .then(({id,name,status,origin,species,image,gender})=>{
            if (name){
                const character ={
                    id,
                    name,
                    status,
                    origin,
                    species,
                    image,
                    gender
                }
                return res.status(200).json(character)
            }
            return res.status(404).send('Not found')
        })
        .catch((error)=> res.status(500).send(error.message))
}

module.exports={
    getCharById
}
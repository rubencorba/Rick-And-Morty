let axios = require('axios');

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

module.exports={
    getCharById
}
let http = require ('http');
const characters = require ('./utils/data')
const getCharById = require ('./controllers/getCharById')

http.createServer((request,response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*');
    
    
    if (request.url.includes("/rickandmorty/character")){
        const id = request.url.split('/').at(-1);
        getCharById(response,id)
        /* const personaje=characters.find((char)=>char.id==Number(id));
        response.writeHead(200,{'Content-Type':'application/json'}) 
        response.end(JSON.stringify(personaje)) */                     
    }

}).listen(3001,'localhost')
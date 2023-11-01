let http = require ('http');
const characters = require ('./utils/data')

http.createServer((request,response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*');
    
    
    if (request.url.includes("/rickandmorty/character")){
        const id = request.url.split('/').at(-1);
        const personaje=characters.find((char)=>char.id==Number(id));
        

        if(personaje){
            return (response
                .writeHead(200,{'Content-Type':'application/json'})
                .end(JSON.stringify(personaje))
            )
        }
        return (response
            .writeHead(404,{'Content-Type':'application/json'})
            .end(JSON.stringify({error:'No existen personajes con ese IDD'}))
        )

    }

}).listen(3001,'127.0.0.1')
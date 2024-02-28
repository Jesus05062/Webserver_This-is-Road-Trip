
const http = require('http');

http.createServer( ( request, response) =>{

    response.write('Hola mundo');
    response.end();

})
.listen( 8080 );

console.log( 'escuchando el puerto', 8080);




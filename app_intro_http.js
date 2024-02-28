
const http = require('http');

http.createServer( ( request, response) =>{

    //response.writeHead(200, { 'content-Type': 'application/json'})
    response.setHeader( 'Content-Disposition', 'attachmen; filename=lista.csv' );
    response.writeHead(200, { 'content-Type': 'application/csv'})
    
    /* const persona = {
        id:  1,
        nombre: 'Fernando'
    } */

    //response.write(JSON.stringify( persona ));
    response.write('id; nombre\n');
    response.write('1; Fernando\n');
    response.write('2; Maria\n');
    response.write('3; Juan\n');
    response.end();

})
.listen( 8080 );

console.log( 'escuchando el puerto', 8080);




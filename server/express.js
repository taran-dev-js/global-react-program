const express = require( 'express' );
const fs = require( 'fs' );
const path = require( 'path' );
// создание express приложения
const app = express();
// обслуживание статических ресурсов
app.get( /\.(js|css|map|ico)$/, express.static( path.resolve( __dirname, '../dist' ) ) );
// в ответ на любые другие запросы отправляем 'index.html'
app.use( '*', ( req, res ) => {
// читаем файл `index.html`
    let indexHTML = fs.readFileSync( path.resolve( __dirname, '../dist/index.html' ), {
        encoding: 'utf8',
    } );

// устанавливаем заголовок и статус
    res.contentType( 'text/html' );
    res.status( 200 );

    return res.send( indexHTML );

} );
// запускаем сервер на порту 9000
app.listen( '9000', () => {
    console.log( 'Express server started at <http://localhost:9000>' );
} );
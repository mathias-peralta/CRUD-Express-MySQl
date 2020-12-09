const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

//settings
app.set('port', process.env.PORT  || 3000);
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));

//middleware
/*
app.use(myConnection(mysql, {
    host:'localhost',
    database: 'prueba',
    user:'root',
    password: 'unida1010',
    port:'3306'
},'single'))
*/

//routes
app.use(require('./routes/indexRouter'));

//start the server
app.listen(app.get('port'), () => {
    console.log('server listen on port:', app.get('port'));
})
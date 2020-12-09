const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const { urlencoded } = require('express');
//settings
app.set('port', process.env.PORT  || 3000);
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));

//middleware

app.use(myConnection(mysql, {
    host:'brdenyskfgwsw8g8mjxy-mysql.services.clever-cloud.com',
    database: 'brdenyskfgwsw8g8mjxy',
    user:'uclrggccwuutcjaq',
    password: 'LDEUZezXa9ZUATyA3YI1',
    port:'3306'
},'single'))
app.use(urlencoded({extended : false}));

//routes
app.use(require('./routes/indexRouter'));

//start the server
app.listen(app.get('port'), () => {
    console.log('server listen on port:', app.get('port'));
})
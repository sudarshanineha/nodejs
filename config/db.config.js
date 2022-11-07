const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'crud'
})

dbConn.connect(function(error){
    if(error) throw error;
    console.log('db connected')
})

module.exports = dbConn;
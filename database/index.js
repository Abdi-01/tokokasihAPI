const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'AL',
    password: '007@001',
    database: 'tokokasih',
    port: 3306,
    multipleStatements: true
})

module.exports=db
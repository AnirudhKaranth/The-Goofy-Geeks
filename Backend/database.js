import mysql from 'mysql2'
const connection=mysql.createConnection({
    host:"172.17.0.2",
    database:process.env.dbname,
    user:process.env.dbuser,
    password:process.env.dbpassword
});
// module.exports=connection;

export default connection;

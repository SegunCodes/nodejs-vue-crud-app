import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config();

//connect to mysql
const pool = mysql.createPool({
    connectionLimit : 100,
    host            : process.env.DB_HOST,
    user            : process.env.DB_USER,
    password        : process.env.DB_PASSWORD,
    database        : process.env.DB_NAME
});
pool.getConnection((err, connection) => {
    if (err) throw err; //not connected
    console.log('Connected as ID'+connection.threadId);
})

export default pool;
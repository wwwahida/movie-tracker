import fs from 'fs'
import db from './connect.js'


const sql = fs.readFileSync('./api/database/showData.sql').toString()

db.query(sql)
    .then(data => {
        db.end()
        console.log('Database Setup Complete')
    })
    .catch((error) => console.log(error));
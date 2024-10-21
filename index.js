// importeren van de express module in node_module
const express = require('express')

// Get the client
const mysql = require('mysql2/promise')

// aanmaken van een express app
const app = express()

// Create the connection to database
const connect = async () => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'll-71461@Kobie1234.',
        database: 'eurosongdb',
        port: 3306
      });

    const [rows ] = await connection.execute('SELECT * FROM artists')

    console.log(rows)
}
connect();

// Endpoints
app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/api/artists', (req, res) => {
    res.send([
        "JB",
        "Beyonce",
    ])
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

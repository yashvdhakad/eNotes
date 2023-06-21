const express = require('express')
const connectToMongo = require("./db/config");
connectToMongo();

const app = express()
const port = 3000

app.use(express.json())

// Available routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/api/auth', require('./routes/auth'))
app.get('/api/notes', require('./routes/notes'))

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

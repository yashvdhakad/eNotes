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
app.post('/api/auth/createuser', require('./routes/auth'))
app.post('/api/auth/login', require('./routes/auth'))
app.post('/api/auth/getuser', require('./routes/auth'))
app.get('/api/notes/fetchallnotes', require('./routes/notes'))
app.post('/api/notes/addnote', require('./routes/notes'))
app.put('/api/notes/updatenote/:id', require('./routes/notes'))
app.delete('/api/notes/deletenote/:id', require('./routes/notes'))

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

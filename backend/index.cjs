const express = require('express')
const app = express()
const port = 3000

app.get('/home', (_, res) => res.send('Hello world'))
app.listen(port, () => console.log(`example http://localhost:${port}`))

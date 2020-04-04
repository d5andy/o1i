const express = require('express')
const app = express()
const port = 3000

//app.use(express.static('public'))app.get('/', (req, res) => res.send('Hello World! and all the things!!!'))

app.use('/html', express.static('html'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
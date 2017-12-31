const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World2!'))

app.listen(5000, () => console.log('listen on port 5000'))
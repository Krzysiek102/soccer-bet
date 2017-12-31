const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => res.send('Hello World2!'))
app.listen(PORT, () => console.log(`listen on ${ PORT }`))
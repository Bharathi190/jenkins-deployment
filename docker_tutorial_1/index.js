const express = require('express')
const app = express()
const port = 3005

app.get('/', (req, res) => {
  res.send('Hello World! from NodeJS app')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

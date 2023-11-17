require('dotenv').config()
const express = require('express')
const app = express()
//const port = 4000
const port=process.env.PORT


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
  res.send("Dileep91@");
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please login at chai</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>Chai aur code</h2>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
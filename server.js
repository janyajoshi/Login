var bodyparser = require(`body-parser`)
var express = require(`express`)
var app = express()
const port = 9000
app.set("view engine","html")
app.use(express.static('public'))



app.get(`/`,(req,res)=>{
  res.send('index')
})

app.post(`/cred`,(req,res)=>{         
  req.on('data',(a)=>{
    var cred = JSON.parse(a.toString())
    console.log(cred.username);
    console.log(cred.password);
  })
})

app.listen(port, ()=>{
    console.log("Server started")
})
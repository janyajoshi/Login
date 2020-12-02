var bodyparser = require(`body-parser`)
var express = require(`express`)
var app = express()
const port = 9000
app.set("view engine","html")
app.use(express.static('public'))
var http = require('http').createServer(app)
var io = require('socket.io')(http);



app.get(`/`,(req,res)=>{
  res.send('index')
})

/*app.all(`/cred`,(req,res)=>{         
  req.on('data',(a)=>{
    var cred = JSON.parse(a.toString())
    console.log(cred.username);
    console.log(cred.password);
  })
})*/

io.on('connection', (socket) => {
  //console.log('user connected');
  socket.on('cred',(a)=>{
    var cred = JSON.parse(a.toString())
    console.log(cred.username);
    console.log(cred.password);
    //authenticate here
    socket.emit('status',1) //respond with 1 if login allowed, 

  })

})

http.listen(port, ()=>{
    console.log("Server started")
})
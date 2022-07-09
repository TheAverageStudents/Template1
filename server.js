const server = require("express")()
const path = require("path")

const log = (q)=>console.log(q)

server.all("/Website/*", (req, res)=>{
    res.sendFile(path.join(__dirname + req.url))
})
server.all("/Styles/*", (req, res)=>{
    res.sendFile(path.join(__dirname + req.url))
})
server.all("/JavaScript/*", (req, res)=>{
    res.sendFile(path.join(__dirname + req.url))
})
server.all("/Fonts/*", (req, res)=>{
    res.sendFile(path.join(__dirname + req.url))
})
server.all("/Resources/*", (req, res)=>{
    res.sendFile(path.join(__dirname + req.url))
})

server.all("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/Website/home.html"))
})

server.listen(8080, ()=>log("Server running."))
const bodyParser = require("body-parser")
const { response } = require("express")
const express = require ("express")
const {MongoClient, ObjectId} = require("mongodb")
const uri = "mongodb+srv://LifeJacket:lifejacket123@cluster0.yrvnibf.mongodb.net/?retryWrites=true&w=majority"

const routerApi = require('./routes')

app = express()

routerApi(app)

port = 3000

app.use(bodyParser.json())
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.status(200).send("Welcome to LifeJacket")
})

app.listen(port, ()=> {
    console.log(`The server this listining in http://localhost:${port}...`)
})



const bodyParser = require("body-parser")
// const { response } = require("express")
const express = require ("express")
const response = require('../network/response')
const {MongoClient, ObjectId} = require("mongodb")
const uri = "mongodb+srv://LifeJacket:lifejacket123@cluster0.yrvnibf.mongodb.net/?retryWrites=true&w=majority"
app = express()

const router = express.Router()



// Create InsertOne

router.post("/", async(req, res) => {
    const body = req.body
    const client = new MongoClient(uri)
    try{
        await client.connect()
        const result = await client.db("LifeJacket").collection("Compras").insertOne(body)
        res.status(201).json({
            message: "Compra creado exitosamente",
            result

        })
    }finally{
        await client.close()
    }
})


// CRUD (READ)
// MongoDB: find() HTTP: GET

// Compras
router.get("/", async(req, res) => {
    const client = new MongoClient(uri)
    try{
        await client.connect()
        const result = await client.db("LifeJacket").collection("Compras").find({}).limit(5).toArray()
        // res.send(result)
        if(result){
            response.success(req, res, "Compras encontrados", 200)
        }else{
            response.error(req, res, 'Compras no encontrados', 404)
        }
    }finally{
        await client.close()
    }
})




// FindOne() HTTP: GET
router.get("/:id", async (req, res) =>{
    const id = req.params.id
    const client = new MongoClient(uri)
    try{
        await client.connect()
        const result = await client.db("LifeJacket").collection("Compras").findOne({_id: new ObjectId(id)})
        // res.status(200).json(result)
        if(result){
            response.success(req, res, "Compra encontrado", 200)
        }else{
            response.error(req, res, 'Compra no encontrado', 404)
        }
    }finally{
        await client.close()
    }
})

//UPDATE  
// updateOne() HTTP: PATCH

router.patch("/:id", async(req, res) =>{
    const id = req.params.id
    const body = req.body
    const client = new MongoClient(uri)
    try{
        await client.connect()
        const result = await client.db("LifeJacket").collection("Compras")
        .updateOne({_id: new ObjectId(id)}, {$set: {City: body.City, State: body.State}})
        res.json({
            message: "update Compra",
            data: body

        })
    }finally{
        await client.close()
    }
})


// DELETE
// DeleteOne() HTTP: DELETE
router.delete('/:id', async(req, res)=>{
    const id = req.params.id
    const client = new MongoClient(uri)
    try{
        await client.connect()
        const result = await client.db('LifeJacket').collection('Compras').deleteOne({_id: new ObjectId(id)})
        res.status(200).json({
            message: 'Compra Eliminada',
            result
        })
    }finally{
        await client.close()
    }
})

module.exports = router
const bodyParser = require("body-parser")
// const { response } = require("express")
const express = require ("express")
const {MongoClient, ObjectId} = require("mongodb")
const response = require('../network/response')
const uri = "mongodb+srv://LifeJacket:lifejacket123@cluster0.yrvnibf.mongodb.net/?retryWrites=true&w=majority"
app = express()

const router = express.Router()



// Create InsertOne

router.post("/", async(req, res) => {
    const body = req.body
    const client = new MongoClient(uri)
    try{
        await client.connect()
        const result = await client.db("LifeJacket").collection("Vendedores").insertOne(body)
        res.status(201).json({
            message: "Vendedor creado exitosamente",
            result

        })
    }finally{
        await client.close()
    }
})


// CRUD (READ)
// MongoDB: find() HTTP: GET

// Vendedor
router.get("/", async(req, res) => {
    const client = new MongoClient(uri)
    try{
        await client.connect()
        const result = await client.db("LifeJacket").collection("Vendedores").find({}).limit(5).toArray()
        // res.send(result)
        if(result){
            response.success(req, res, "Vendedores encontrados", 200)
        }else{
            response.error(req, res, 'Vendedores no encontrados', 404)
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
        const result = await client.db("LifeJacket").collection("Vendedores").findOne({_id: new ObjectId(id)})
        // res.status(200).json(result)
        if(result){
            response.success(req, res, "Vendedor encontrado", 200)
        }else{
            response.error(req, res, 'Vendedor no encontrado', 404)
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
        const result = await client.db("LifeJacket").collection("Vendedores")
        .updateOne({_id: new ObjectId(id)}, {$set: {Telefon: body.Telefon, Email: body.Email, State: body.State}})
        res.json({
            message: "update Vendedor",
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
        const result = await client.db('LifeJacket').collection('Vendedores').deleteOne({_id: new ObjectId(id)})
        res.status(200).json({
            message: 'Vehiculo Eliminado',
            result
        })
    }finally{
        await client.close()
    }
})
module.exports = router
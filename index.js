const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

// middle ware 
app.use(cors());
app.use(express.json());

// mongodb uri
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bk4fxj2.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


/* client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
}); */

async function run(){
    try{
        await client.connect();
        const products00Collection = client.db('laptop_store00_db').collection('products00');

        /////////////////
        // add product api
        app.get('/products', async(req, res) =>{
            const query = {};
        })
    }
    finally{

    }
}
run().catch(console.dir);

app.get('/', (req, res) =>{
    res.send(('hello from lapto_store00_server'))
})

app.listen(port, () =>{
    console.log(`laptop_store00_server app listening on port${port})`)
})
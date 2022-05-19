const express = require('express');
const app = express();
const cors = require('cors');
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;

// middleware
app.use(cors())
app.use(express.json())




const uri = `mongodb+srv://${process.env.TO_DO_APP_User_Name}:${process.env.TO_DO_APP_User_Password}@cluster0.6slar.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
 try {
  await client.connect();
  const tasksCollection = client.db('to-do-app').collection("data");


  app.get('/tasks', async (req, res) => {
   const data = req.body;
   const query = {};
   const cursor = tasksCollection.find(query)
   const tasks = await cursor.toArray()
   res.send(tasks);
  })

  app.post('/tasks', async (req, res) => {
   const data = req.body;
   const newTodo = await tasksCollection.insertOne(data);
   res.send(newTodo);
  })

  app.get('/tasks/:id', async (req, res) => {
   const id = req.params.id;
   const query = { _id: ObjectId(id) };
   const getTask = await tasksCollection.findOne(query)
   res.send(getTask)
  })

  app.delete('/tasks/:id', async (req, res) => {
   const id = req.params.id;
   const query = { _id: ObjectId(id) };
   const deleteOne = await tasksCollection.deleteOne(query);
   res.send(deleteOne);

  })

 } catch (error) {
  // something
 }
}

run().catch(console.dir);


app.get('/', (req, res) => {
 res.send('Hello Todo_app')
})

app.listen(port, () => {
 console.log(`This App Run From port ${port}`)
})
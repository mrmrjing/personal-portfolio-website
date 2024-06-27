const express =  require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const projectRoute = require('./routes/projectRoute');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
const uri = "mongodb+srv://hongjing123321:Password004!@cluster0.ogi5duz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToMongoDB() {
    try {
      await client.connect();
      console.log("Successfully connected to MongoDB!");
      return client.db("projectData"); // specify the database you want to use
    } catch (error) {
      console.error("Failed to connect to MongoDB", error);
      process.exit(1);
    }
}

const PORT = process.env.PORT || 5001;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  const db = await connectToMongoDB();
}); 

process.on('SIGINT', async () => {
    console.log('Closing MongoDB connection');
    await client.close();
    process.exit(0);
  });
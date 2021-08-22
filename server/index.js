import express from 'express';
import mongoose from 'mongoose';
import userController from "./controllers/userController.js"
import postController from "./controllers/postController.js"

// env variables
import dotenv from 'dotenv'
dotenv.config();


const app = express();
const port = 3000;

app.use(express.json())

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

console.log(process.env.MONGO_URI)
mongoose.connect(`${process.env.MONGO_URI}`, {useNewUrlParser: true});

const database = mongoose.connection;
database.on("error", () => console.error("Failed to connect Api"));
database.once("open", () => console.log("Connected to API"));

app.use('/user', userController)

app.use('/post', postController)
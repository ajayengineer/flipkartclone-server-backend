//Library Imported
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

//Components Imported
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import Routes from './routes/routes.js';


dotenv.config()

const app = express();

app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

//This code is use for Routing
app.use('/', Routes);




const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, ()=> console.log(`Server is Successfully Runing on PORT ${PORT}`));


// Default DATA to Database
DefaultData();
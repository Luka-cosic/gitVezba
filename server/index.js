import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import { createServer } from "http";
import dotenv from "dotenv";

const app = express();
const result = dotenv.config();
const httpServer = createServer(app);

const PORT = process.env.PORT || 6000;

app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(cors());

app.get("/", (req,res) => {
    console.log("connected");
    
    res.json({rec: "samotako"})
    
});

app.get("/sarma", (req,res) => {
    res.json({rec: "Samo Jako"})
    
});

httpServer.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
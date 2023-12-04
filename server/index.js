import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';


const app = express();


const PORT = process.env.PORT || 6000;

// app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
// app.use(bodyParser.json({limit:"30mb", extended:true}));
// app.use(cors());

app.get("/", (req,res) => {
    res.json({rec: "samotako"})
    
});
app.get("/user", (req,res) => {
    res.json({rec: "samotako"})
    
});
app.get("/sarma", (req,res) => {
    res.json({rec: "samotako"})
    
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 4000

app.use(
    cors({
      origin: "*",
    })
);

app.use(express.json());

//mounting routes

const userRoutes = require("./routes/userRoutes"); 
app.use("/api/v1" , userRoutes);



app.listen(PORT , ()=>{
    console.log(`Server started succesfully at ${PORT}`);
})

const dbConnect = require("./config/database");
dbConnect();

app.get("/" , (req,res)=>{
    res.send(`<h1>This is Homepage baby</h1>`);
})
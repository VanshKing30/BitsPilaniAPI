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

const studentRoutes = require("./routes/student"); 
const canteenRoutes = require("./routes/canteen");
app.use("/canteen" , canteenRoutes);
app.use("/student", studentRoutes);




app.listen(PORT , ()=>{
    console.log(`Server started succesfully at ${PORT}`);
})

const dbConnect = require("./config/database");
dbConnect();

app.get("/" , (req,res)=>{
    res.send(`<h1>This is Homepage baby</h1>`);
})
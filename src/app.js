 const express = require("express")

 const app = express();

 app.use("/ ", (req, res) =>{
   res.send("Namaste Akshay!");    

});

app.use("/hello",(req,res) =>{
    res.send("Hello hello!");
 });

 app.use("/test",(req,res) =>{
    res.send("Hello hello!");
 });


 app.listen(7777, () => {
    console.log("Server is successfully ")
    
 });
const express = require("express");
const mongoose = require("mongoose");
const { route } = require("../../../../Day5/src/routes/routes");

const app = express();


mongoose
    .connect(
         "mongodb+srv://viveksavita5119:Vivek%40%2311@cluster0.32zmzy4.mongodb.net/E-CommeresApp"
    )
  .then(() => console.log("MongoDB connected successfully"))
  .catch(() => console.log("MongoDB not connected ")
  );


// Test Api

  app.get("/test", (req, res) => {
    res.send("Hello from the E-Commerce server");
  });


// server Creation

let port =  4000;
app.listen(port, (err) => {
  err ? console.log("Server not connected") 
  : console.log(`Server connected on port ${port}`);
});
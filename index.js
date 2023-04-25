const Port = 3000;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.urlencoded())
// app.use(express.json())
const db = require("./config/mongoose");


app.get("/", (req, res) => {
  res.json("Welcome to the app ");
});



app.use("/", require("./routes/index"));

app.get("/", (req, res) => {
  res.json("Welcome to the app ");
});

app.listen(Port, function (err) {
  if (err) {
    console.log(err);
  }
  console.log("server is runing ...", Port);
});

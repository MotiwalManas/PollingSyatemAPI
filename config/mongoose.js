const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://rishikesh:rishikesh@cluster1.behm7nv.mongodb.net/?retryWrites=true&w=majority"
);


const connectParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};


const db = mongoose.connection;

db.on("error", console.error.bind(console, "error connecting to database"));

db.once("open", () => {
  console.log("successfully connected to database : mongoDB");
});

module.exports = mongoose;

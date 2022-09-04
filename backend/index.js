const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const Router = require("./Components/Routes/Route");

const MONGO_URI = process.env.MONGO_URI;
const app = express();
const PORT = 3001;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Database Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.use(cors());

app.use("/", Router);

app.listen(PORT, () => {
  console.log("Port Connected, running on port:", PORT);
});

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");


dotenv.config();

// connect to db
mongoose.connect(
    process.env.DB_CONNECT,
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => console.log("connected to db")
  );

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}));

  // Import routes
const productRoutes = require("./routes/product");

// Middlewares
app.use(express.json());
app.use(cors());

// route Middlewares
app.use("/api/products", productRoutes);


app.listen(4000, () => console.log("server up and runing on port 4000!"));



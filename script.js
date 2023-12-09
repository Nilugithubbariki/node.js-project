// const express = require("express");
// const app = express();
// app.set("view engine", "ejs");
// app.use(express.static("./public"));
// app.get("/", function (req, res) {
//   res.render("index");
// });
// app.get("/error", function (req, res, next) {
//   throw Error("Something went wrong...");
// });
// app.get("/contact", function (req, res) {
//   res.render("contact");
// });
// app.use(function errorHandler(err, req, res, next) {
//   if (res.headersSent) {
//     return next(err);
//   }
//   res.status(500);
//   res.render("error", { error: err });
// });
// app.listen(3000);

// app.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost/product-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Product Schema
const productSchema = new mongoose.Schema({
  productName: String,
  productCategory: String,
  imageUrl: String,
  productDescription: String,
});

const Product = mongoose.model("Product", productSchema);

// Create a new product
app.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all products with pagination and filtering
app.get("/products", async (req, res) => {
  try {
    const { page = 1, limit = 10, category } = req.query;

    const query = category ? { productCategory: category } : {};

    const products = await Product.find(query)
      .limit(parseInt(limit))
      .skip((page - 1) * limit);

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});

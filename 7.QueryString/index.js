import express from "express";
// import { products } from "./products.js";
import userCredentials from "./middlewares/logs.js";

const app = express();

app.use(userCredentials);

app.get("/", (req, res) => {
  res.send("<h1>Hello Admin</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

// app.get("/products", (req, res) => {
//   res.json(products);
// });

app.listen(8000, () => {
  console.log("Sever Up");
});

import express from "express";
const app = express();

app.get("/student/delete/:id", (req, res) => {
  res.send(`${req.params.id} deleted`);
});

app.get("/ecom/product/iphones/:model", (req, res) => {
  const { model } = req.params;
  res.send(`Iphone ${model} Pro Max`);
});

app.get("/product/:category/:id", (req, res) => {
  const { category, id } = req.params;
  res.send(`Product Category (${category}) & Product ID (${id})`);
});

app.get("/product/order/:day/:month/:year", (req, res) => {
  const { day, month, year } = req.params;
  res.send(`Order Date: ${day}-${month}-${year}`);
});

app.listen(8000, () => {
  console.log("Server Up");
});

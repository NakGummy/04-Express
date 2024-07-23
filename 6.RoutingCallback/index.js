import express from "express";
import students from "./router/student.js";

const app = express();

app.get("/user/:id", (req, res) => {
  console.log("This is User ID path");
  res.send("Responce OK");
});

app.param("id", (req, res, next, id) => {
  console.log(`id: ${id}`);
  next();
});

app.use("/students", students);

app.listen(8000, () => {
  console.log("Server Up");
});

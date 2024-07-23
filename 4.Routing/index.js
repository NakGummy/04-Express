import express from "express";
import students from "./student.js";
import teachers from "./teacher.js";

const app = express();

app.use("/students", students);
app.use("/teachers", teachers);

app.listen(8000, () => {
  console.log("Server Up");
});

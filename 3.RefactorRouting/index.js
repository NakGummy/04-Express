import express from "express";

const app = express();

app.listen(8000, () => {
  console.log("Server Up");
});

// Refactor
app
  .route("/student")
  .get((req, res) => res.send("All students"))
  .post((req, res) => res.send("Add New Student"))
  .put((req, res) => res.send("Update Student"))
  .delete((req, res) => res.send("Delete Student"));

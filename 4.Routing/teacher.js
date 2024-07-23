import express from "express";
const router = express.Router();

router.get("/all", (req, res) => {
  res.send("All Teachers");
});

router.post("/create", (req, res) => {
  res.send("Sign in New Teacher");
});

router.put("/update", (req, res) => {
  res.send("Update Teacher ID");
});

router.delete("/delete", (req, res) => {
  res.send("Remove Teacher From The db");
});

export default router;

import express from "express";
import {
  allStudents,
  newStudent,
  updateStudent,
  removeStudent,
} from "../controllers/student.js";

const router = express.Router();

router
  .get("/all", allStudents)
  .post("/create", newStudent)
  .put("/update", updateStudent)
  .delete("/remove", removeStudent);

export default router;

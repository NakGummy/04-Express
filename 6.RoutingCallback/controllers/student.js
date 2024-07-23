import express from "express";

export const allStudents = (req, res) => {
  res.send("All Students");
};

export const newStudent = (req, res) => {
  res.send("Add New Student");
};

export const updateStudent = (req, res) => {
  res.send("Update Student");
};

export const removeStudent = (req, res) => {
  res.send("Removed Student");
};

import express from "express";
const app = express();

app.listen(8000, () => {
  console.log("Server Up");
});

// Basic Routing
app.get("/", (req, res) => {
  res.send("<h1>Home</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

app.get("/product/iphone ", (req, res) => {
  res.send("this will run you enter /product/iphone");
});

//// Advanced Routing
app.get("/ab?cd", (req, res) => {
  res.send("acd or abcd then will run this page");
});

app.get(/x/, (req, res) => {
  res.send("path includes x then run this page");
});

app.get(/^\/users\/[0-9]{4}$/, (req, res) => {
  res.send("users/xxxx then run this page");
});

// Multi cb function
app.get(
  "/double-cb",
  (req, res, next) => {
    console.log("from first callback");
    next();
  },
  (req, res) => {
    res.send("from second  callback");
  }
);

// array callback
const cb1 = (req, res, next) => {
  console.log("from 1 of array");
  next();
};
const cb2 = (req, res, next) => {
  console.log("from 2 of array");
  next();
};
const cb3 = (req, res) => {
  console.log("from 3 of array");
  res.send("from Array of Callbacks");
};

app.get("/array-cb", [cb1, cb2, cb3]);

app.get(
  "/crazyness",
  [cb1, cb2, cb2],
  (req, res, next) => {
    console.log("Semi Final Callback");
    next();
  },
  (req, res, next) => {
    console.log("Final Callback");
    res.send("End of Callbacks");
  }
);

// BAD Kkow how
app.get("/student", (req, res) => {
  res.send("All students");
});
app.post("/student", (req, res) => {
  res.send("Add New Studentr");
});
app.put("/student", (req, res) => {
  res.send("Update Student");
});
app.delete("/student", (req, res) => {
  res.send("Update Student");
});

// HTTP METHODS
// POST
// PUT
// PATCH
// DELETE
// ALL

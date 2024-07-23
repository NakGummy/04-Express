import express from "express";
import { join } from "path";
import routes from "../routes/route.js";

const app = express();

app.set("view engine", "ejs");
// app.use(express.static(join(process.cwd(), "public")));

app.use("/", routes);

app.listen(8000, () => {
  console.log("Server Up");
});

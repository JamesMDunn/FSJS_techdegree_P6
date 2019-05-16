const express = require("express");
const app = express();
const data = require("./data.json");
const projects = data.projects;

app.use(express.static("public"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", { projects });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/project/:id", (req, res) => {
  const id = req.params.id;

  res.render("project", projects[id]);
});

app.listen(3000);

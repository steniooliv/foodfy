import express from 'express';
import nunjucks from 'nunjucks';
import { recipes } from './data.js';

const server = express();

server.use(express.static("public"));
server.set("view engine", "njk");
nunjucks.configure("views", {
  express: server,
})

server.get("/", (req, res) => {
  res.render("home", { recipes });
});

server.get("/about", (req, res) => {
  res.render ("about");
})

server.get("/recipes", (req, res) => {
  res.render("recipes", { recipes });
})

server.get("/recipes/:index", (req, res) => {
  const recipeIndex = req.params.index;
  const recipe = recipes[recipeIndex];
  res.render("description", { recipe });
});

server.listen(3000, () => {
  console.log("server is running");
});
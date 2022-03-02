const express = require("express");
const recipes = require("./src/controllers/recipes/recipes.js");
const admin = require("./src/controllers/admin/admin.js");

const routes = express.Router();

routes.get("/admin/recipes", admin.home);
routes.get("/admin/recipes/create", admin.create);
routes.get("/admin/recipes/:id", admin.show);
routes.get("/admin/recipes/:id/edit", admin.edit);
routes.post("/admin/recipes", admin.post);
routes.put("/admin/recipes", admin.put);
routes.delete("/admin/recipes", admin.delete);

routes.get("/", recipes.home);
routes.get("/about", recipes.about);
routes.get("/recipes", recipes.recipes);
routes.get("/recipes/:id", recipes.show);

module.exports = routes;
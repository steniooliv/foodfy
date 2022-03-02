const data = require("../../../data.json");

exports.home = function (req, res) {
  return res.render("home", { recipes: data.recipes });
}

exports.about = function (req, res) {
  return res.render("about");
}

exports.recipes = function (req, res) {
  return res.render("recipes", { recipes: data.recipes })
}

exports.show = function (req, res) {
  const { id } = req.params;
  const foundRecipe = data.recipes.find(recipe => recipe.id == id);

  if (!foundRecipe) {
    return res.send("Recipe not found.")
  }

  res.render("description", { recipe: foundRecipe });
}
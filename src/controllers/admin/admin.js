const fs = require("fs");
const data = require("../../../data.json");

exports.home = function (req, res) {
  return res.render("admin/home", { recipes: data.recipes });
}

exports.show = function (req, res) {
  const { id } = req.params;
  const recipe = data.recipes.find(function (recipe) {
    return recipe.id == id;
  });

  if (!recipe) {
    return res.send("Recipe not found.");
  }
  return res.render("admin/details", { recipe })
}

exports.create = function (req, res) {
  return res.render("admin/create");
}

exports.post = function (req, res) {
  const keys = Object.keys(req.body);

  for (let key of keys) {
    if (req.body[key] == "") {
      return res.send("Please, fill all fields.")
    }
  }

  let {
    image,
    title,
    author,
    ingredients,
    preparation,
    information
  } = req.body;

  const id = Number(data.recipes.length) + 1;
  title = "Lasanha"; // TODO: AJUSTAR NO LOGIN
  author = "Stenio Oliveira"; // TODO: AJUSTAR NO LOGIN

  const recipe = {
    id,
    image,
    title,
    author,
    ingredients,
    preparation,
    information
  }

  data.recipes.push(recipe);

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
    if (err) return res.send(`Write file error ${err}`);
    return res.redirect(`/admin/recipes/${recipe.id}`);
  });
}

exports.edit = function (req, res) {
  const { id } = req.params;
  const recipe = data.recipes.find(function (recipe) {
    return recipe.id == id;
  });

  if (!recipe) {
    return res.send("Recipe not found.");
  }

  return res.render("admin/edit", { recipe });
}

exports.put = function (req, res) {
  const { id } = req.body;
  let recipeIndex = 0;
  
  const foundRecipe = data.recipes.find(function(recipe, index) {
    if (recipe.id == id) {
      recipeIndex = index;
      return true;
    }
  });

  if (!foundRecipe) {
    return res.send("Recipe not found.");
  }

  const recipe = {
    ...req.body,
    id: Number(id),
  }

  data.recipes[recipeIndex] = recipe;

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
    if (err) return res.send(`Write file error ${err}`);
    return res.redirect(`/admin/recipes/${recipe.id}`);
  });
}

exports.delete = function (req, res) {
  const { id } = req.body;

  const filteredRecipes = data.recipes.filter(function(recipe) {
    return recipe.id != id;
  });

  data.recipes = filteredRecipes;

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
    if (err) return res.send(`Write file error ${err}`);
    return res.redirect(`/admin/recipes/${recipe.id}`);
  });
}
const express = require("express");
const nunjucks = require("nunjucks");
const methodOverride = require("method-override");
const routes = require("./routes.js");

const server = express();

server.use(express.urlencoded({extended: true}));
server.use(express.static("public"));
server.use(methodOverride("_method"));
server.set("view engine", "njk");
nunjucks.configure("src/views", {
  autoescape: true,
  express: server,
  noCache: true
})

server.use(routes);

server.listen(3000, () => {
  console.log("server is running");
});
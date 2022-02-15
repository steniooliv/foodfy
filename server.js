import express from 'express';
import nunjucks from 'nunjucks';

const server = express();

server.use(express.static("public"));
server.set("view engine", "njk");
nunjucks.configure("views", {
  express: server,
})


server.get("/", (req, res) => {
  res.render("home");
});

server.listen(3000, () => {
  console.log("server is running");
});
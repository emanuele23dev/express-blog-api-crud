const express = require('express');
const app = express();
const port = 3000;
const host = "http://127.0.0.1";
const posts = require('./db/posts.js')
const postControllers = require('./controllers/postControllers.js')


app.listen(port, () => {
  console.log(`App listening on ${host}:${port}`);
});

app.get("/", (req, res) => {
  res.send("Express Blog Api Crud");
});

app.get("/posts", postControllers.index);

app.get("/posts/:title", postControllers.show);


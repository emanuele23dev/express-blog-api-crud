const express = require('express');
const app = express();
const port = 3000;
const host = "http://127.0.0.1";

const postsRoutes = require("./routers/posts.js");


app.listen(port, () => {
  console.log(`App listening on ${host}:${port}`);
});

app.get("/", (req, res) => {
  res.send("Express Blog Api Crud");
});


app.use('/posts', postsRoutes)


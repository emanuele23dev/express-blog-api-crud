const express = require('express');

const app = express();
app.use(express.static("public"));
app.use(express.json());

const notFoundMiddleware = require('./middlewares/notFound.js')

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

app.use(notFoundMiddleware)


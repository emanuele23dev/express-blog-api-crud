const express = require('express');

const app = express();
app.use(express.static("public"));
app.use(express.json());

const notFoundMiddleware = require('./middlewares/notFound.js')
const loggerMiddleware = require('./middlewares/loggerMiddleware.js')

const port = 3000;
const host = "http://127.0.0.1";

const postsRoutes = require("./routers/posts.js");



app.listen(port, () => {
  console.log(`App listening on ${host}:${port}`);
});

app.get("/", (req, res) => {
  res.send("Express Blog Api Crud");
});


app.use('/posts', loggerMiddleware)

// app.use("/posts", (req, res, next) => {
//   throw new Error("You broke everything dude! 💥");
// }); 

app.use('/posts', postsRoutes)

app.use(notFoundMiddleware) 

app.use((err, req, res, next) => {
  console.log("Error: ", err.message);
  
  console.error(err.stack);
  res.status(500).send({
    message: "Something went wrong",
    error: err.message,
  });
});


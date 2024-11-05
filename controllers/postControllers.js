const posts = require('../db/posts.js')
const fs = require('fs')

const index = (req, res) => {
  res.json({
    data: posts,
    count: posts.length,
  });
};


const show = (req, res) => {
  const post = posts.find(
    (post) => post.title.toLowerCase() === req.params.title
  );

  if (!post) {
    return res
      .status(404)
      .json({ error: `post con titolo ${req.params.title} non trovato` });
  }
  return res.status(200).json({ data: post });
};


const store = (req, res) => {

    const post = {
      title: req.body.title,
      slug: req.body.slug,
      content: req.body.content,
      image: req.body.image,
      tags: req.body.tags
    };

    posts.push(post)

    fs.writeFileSync('./db/posts.js', `module.exports =  ${JSON.stringify(posts, null, 4)}`);


    console.log(req.body);

    return  res.status(201).json({
        status: 201,
        data: posts,
        count: posts.length 
    });
    
}

module.exports = {
    index,
    show,
    store
}
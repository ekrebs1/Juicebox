const express = require('express');
const postsRouter = express.Router();
const { getAllPosts } = require('../db');

//middleware
postsRouter.use((req, res, next) => {
  console.log("A request is being made to /posts");

  next();

});
//Get Posts Route
postsRouter.get('/', async (req, res) => {
  const posts = await getAllPosts();

  res.send({
    posts
  });
});

module.exports = postsRouter;
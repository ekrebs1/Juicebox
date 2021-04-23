const express = require('express');
const tagsRouter = express.Router();
const { getAllTags } = require('../db');

//middleware
tagsRouter.use((req, res, next) => {
  console.log("A request is being made to /tags");

  next();

});
//Get Tags Route
tagsRouter.get('/', async (req, res) => {
  const tags = await getAllTags();

  res.send({
    tags
  });
});

module.exports = tagsRouter;
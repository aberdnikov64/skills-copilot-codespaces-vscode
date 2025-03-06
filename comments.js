// Create web server
const express = require('express');
const app = express();
const port = 3000;
// create middleware
app.use(express.json());
// create comments
const comments = [];
// create get method
app.get('/comments', (req, res) => {
  res.json(comments);
});

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let data = [];
// Read the todo list items
app.get('/api/todo', (req, res) => {
  res.json(data);
});

// Write a new todo items
app.post('/api/addtodo', (req, res) => {
  const tempdata = { 'id': data.length + 1, 'task': req.body.data.task }
  data.push(tempdata);
  res.json(data);

});


const port = 5000;
app.listen(port, () => console.log(`server started at port: ${port}`));


var express = require('express');
var bodyParser = require('body-Parser');

var {mongoosse} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('./todos', (req, res) => {
  //console.log(req.body);
  var todo = new todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.send(e);
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});
/*
var newTodo = new Todo({
  text: 'Cooke dinner'
});

newTodo.save().then((doc) => {
  console.log('Saved todo', doc);
}, (e) => {
  console.log('Unable to save todo')
});
*/
/*
var otherTodo = new Todo({
  text: ' something write',
  completed: true,
  completedAt: 123
});

otherTodo.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save', e);
}); */

/*
var User = new User({
  email: 'mahendrariyad88@gmail.com'
});

User.save().then((doc) => {
  console.log('User saved', doc);
}, (e) => {
  console.log('Unable to save user', e);
});
*/

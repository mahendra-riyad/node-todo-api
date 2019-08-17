//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

/*  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5d579e5b9c6e449374b95c16')
  }, {
    $set: {
      completed: true
    }
    }, {
          returnOriginal: false
    }).then((result) => {
      console.log(result);
    }); */
    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5d56d8d59de2ec0b78ef0c3a')
    }, {
        $inc: {
          age:1
        }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });
  //db.close();
});

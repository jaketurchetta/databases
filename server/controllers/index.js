var models = require('../models');
var Promise = require('bluebird');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('Hello from get() in controllers');
      model.messages.get(data, (err, message) => {
        if (err) {
          console.log(err);
        } else {
          res.sendStatus(201);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      let message = req.body;
      console.log(`message = ${message}`);
      model.messages.post(data, (err, message) => {
        if (err) {
          console.log(err);
        } else {
          res.sendStatus(201);
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    // Part of the chain that 'creates' message / insert into your database.
    post: function (req, res) {
      let username = req.body;
      model.users.post(data, (err, username) => {
        if (err) {
          console.log(err);
        } else {
          res.sendStatus(201);
        }
      });
    }
  }
};


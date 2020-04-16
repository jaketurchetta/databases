var db = require('../db');
var Promise = require('bluebird');

module.exports = {
  messages: {
    get: function (callback) {
      console.log('Hello from get() in models');
      db.query('select * from messages', (err) => {
        if (err) {
          console.log(err);
        } else {
          callback(data);
        }
      });

      // call module.exports.dbConnection.query('query action in quotes', error-first callback)
    }, // a function which produces all the messages
    post: function (data, callback) {
      console.log('Hello from post() in models');
      db.query(`INSERT INTO messages (body) VALUES (${data[body]})`, (err) => {
        if (err) {
          console.log(err);
        } else {
          callback(data);
        }
      });
      // call module.exports.dbConnection.query('query action in quotes', error-first callback)
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      console.log('Hello from get() in models');

      // call module.exports.dbConnection.query('query action in quotes', error-first callback)
    },
    post: function (data, callback) {
      console.log('Hello from post() in models');

      // call module.exports.dbConnection.query('query action in quotes', error-first callback)

      db.query(`INSERT INTO users (username) VALUES (${data[username]})`, (err) => {
        if (err) {
          console.log(err);
        } else {
          callback(data);
        }
      });
    }
  }
};


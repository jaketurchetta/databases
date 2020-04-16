DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE rooms (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  room_name VARCHAR(128)
);

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  body VARCHAR(150),
  created_at TIMESTAMP,
  user_id INT,
  room_id INT
);


CREATE TABLE friends (
  followers_id INT,
  following_id INT
);

ALTER TABLE messages ADD FOREIGN KEY (user_id) REFERENCES users (id);
ALTER TABLE messages ADD FOREIGN KEY (room_id) REFERENCES rooms (id);
ALTER TABLE friends ADD FOREIGN KEY (followers_id) REFERENCES users (id);
ALTER TABLE friends ADD FOREIGN KEY (following_id) REFERENCES users (id);

/*  to create the database and the tables.*/

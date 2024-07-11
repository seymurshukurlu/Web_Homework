const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3000;

app.use(express.json());

let db;

function handleDisconnect() {
  db = mysql.createConnection({
    host: 'localhost', // your host
    user: 'root', // your MySQL username
    password: 'seymur', // your MySQL password
    database: 'web_code' // your database name
  });

  db.connect(err => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      setTimeout(handleDisconnect, 2000); // Retry connection after 2 seconds
    } else {
      console.log('Connected to MySQL');
    }
  });

  db.on('error', err => {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect(); // Reconnect if connection is lost
    } else {
      throw err;
    }
  });
}

handleDisconnect();

app.get("/", (req, res) => {
  res.send("<h1>users: /users </h1>");
});

// Get all users
app.get("/users", (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send(results);
  });
});

// Get user by ID
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.length > 0) {
      res.status(200).send(results[0]);
    } else {
      res.status(404).send({
        status: 404,
        message: "bele bir user yoxdur",
      });
    }
  });
});

// Delete user by ID
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send({ message: "User deleted" });
  });
});

// Post new user
app.post("/users", (req, res) => {
  const {id, name, age } = req.body;

  
  if (!name) {
    return res.status(400).send({ message: "ad daxil edilmeyib" });
  }
  if (!age) {
    return res.status(400).send({ message: "yas daxil edilmeyib" });
  }
  db.query('INSERT INTO users (id, name, age) VALUES (?, ?, ?)', [id, name, age], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send({ message: "succes", });
  });
});


// Patch user by ID
app.patch("/users/:id", (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  const fields = Object.keys(updates).map(key => `${key} = ?`).join(", ");
  const values = Object.values(updates).concat(id);
  db.query(`UPDATE users SET ${fields} WHERE id = ?`, values, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send({ message: "succes", data: results });
  });
});

// Put user by ID
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  db.query('REPLACE INTO users (id, name, age) VALUES (?, ?, ?)', [id, name, age], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send({ message: "succes", data: { id, name, age } });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

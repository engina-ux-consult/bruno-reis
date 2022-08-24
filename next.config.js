const express = require('express');
const mysql   = require('mysql');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'rey',
  password : 'Senh@Mestr3',
  database : 'iknow_system'
});

db.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  } else{console.log("Database Connected")}
});

app.post("/create", (req,res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  db.query("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
  [name,email,password], 
  (err, result) => {
    if(err){
      console.log(err);
    } else {
      res.send("Usuario cadastrado com sucesso!");
    }
  });
});

app.listen(3001, () => {
  console.log("Running in port 3001");
});
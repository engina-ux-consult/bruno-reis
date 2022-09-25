const express = require('express');
const mysql   = require('mysql');
const cors = require('cors');
const bcrypt = require("bcrypt");
const app = express();
const saltRounds = 10;

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



app.post("/create", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.length == 0) {
      bcrypt.hash(password, saltRounds, (err, hash) => {
        db.query(
          "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
          [name,email,password], 
          (error, response) => {
            if (err) {
              console.log(err);
            }

            console.log({ msg: "Usuário cadastrado com sucesso" });
          }
        );
      });
    } else {
      console.log({ msg: "Email já cadastrado" });
    }
  });
});



app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.length > 0) {
      bcrypt.compare(password, result[0].senha, (error, response) => {
        if (error) {
          console.log(error);
        }
        if (password === result[0].senha) {
          console.log({ msg: "Usuário logado" });
        } else {
          console.log({ msg: "Senha Incorreta" });
        }
      });
    } else {
      console.log({ msg: "Usuário não registrado!" });
    }
  });
});
app.listen(3001, () => {
  console.log("Running in port 3001");
});
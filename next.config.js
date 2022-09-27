const express = require('express');
const mysql   = require('mysql');
const cors = require('cors');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const app = express();
const saltRounds = 10;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host     : 'bruno-reis-system.cy1n36zfyybi.us-east-1.rds.amazonaws.com',
  user     : 'admin',
  password : 'f_nRZ*4H#5qeLiY',
  database : 'iknow_system'
});

db.connect(function(err) {
  if (err) {
    console.error({ msg: 'error connecting: ' + err.stack});
    return;
  } else{console.log({ msg: "Database Connected"})}
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
            }else{
              db.query("SELECT id FROM usuarios WHERE email = ?",[email],(erro, re) => {
                const id = 0;
                const token = jwt.sign({id}, "jwtSecret", { expiresIn: 60});
                console.log({ auth: true, token});
                res.json({ auth: true, token, result: result});
                console.log({ msg: "Usuário cadastrado com sucesso" });
              });
            }
          }
        );
      });
    } else {
      res.json({auth: false, message: "No User Exists"});
      console.log({ msg: "Email já cadastrado" });
    }
  });
});

function verifyJWT(req, res, next){
  const token = req.headers['x-access-token'];
  if (!token) {
    res.send("Yo, we need a token, please give it to us next time!");
    console.log({ msg: "Yo, we need a token, please give it to us next time!" });
  } else {
    jwt.verify(token, "jwtSecret", (err, decoded) => {
    if (err) {
      res.json({auth: false, message: "U failed to auth"});
      console.log({ msg: "U failed to auth" });
    } else {
      req.id = decoded.id;
      console.log({ msg: "reqid:" + req.id });
      next();
    }
  })
  }
}

app.get('/userAuth', verifyJWT , (req, res) => {
  res.send("Yo, u are auth!");
  console.log({ msg: "Yo, u are auth!" });
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
          const id = result[0].id;
          const token = jwt.sign({id}, "jwtSecret", { expiresIn: 60});
          console.log({ auth: true, token});
          res.json({ auth: true, token, result: result});
        } else {
          res.json({auth: false, message: "Wrong Password"});
          console.log({ msg: "Senha Incorreta" });
        }
      });
    } else {
      console.log({ msg: "Usuário não registrado!" });
      res.json({auth: false, message: "No User Exists"});
    }
  });
});
app.listen(3001, () => {
  console.log("Running in port 3001");
});
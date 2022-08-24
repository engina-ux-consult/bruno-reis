/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

const express = require('express');
const app = express();

app.listen(3001);

const mysql      = require('mysql');

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
  }
});

app.post('create', (req,res) => {
  const name = req.body.name
  const email = req.body.email;
  const password = req.body.password;

  db.query("INSERT INTO usuarios(nome, email, senha) VALUES (?, ?, ?)",
  [name,email,password],(err, result) => {
    if(!err){
      console.log('Usuario cadastrado com sucesso!');
    }else{
      console.log('Erro ao cadastrar o usuario!');
    }
  });
});

 {/*
db.query("INSERT INTO usuarios(nome, email, senha) VALUES ('Rey', 'rey@gmail.com', '123456')",function(err, result){
    if(!err){
      console.log('Usuario cadastrado com sucesso!');
    }else{
      console.log('Erro ao cadastrar o usuario!');
    }
  });
*/} 
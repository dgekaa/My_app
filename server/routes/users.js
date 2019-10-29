const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const User = require("../Models/Users");

// Register Handle
router.post("/register", (req, res) => {
  const { name, password, repassword } = req.body;  
  User.findOne({name: name})
    .then(user => {
      if(user){
        res.send({ msg: "Данный пользователь уже зарегистрирован" }).status(400);
      }else{
        if(password.length < 4 && repassword.length < 4){
          res.send({ msg: "Пароль должен состоять как минимум из 4 символов" }).status(400);
        }else{
          User.create({
            name,
            password
          })
            .then(user => res.send({ name: user.name }))
            .catch(err => res.status(400))      
        }
      }
    })
    .catch(err => res.status(400))
});

// Login Handle
router.post("/login", (req, res) => {
  const { name, password } = req.body;
  User.findOne({name: name})
  .then(user => {
    if(!user){
      res.send({ msg: "Неверное имя пользователя" }).status(400);
    }else{
      if(user.password !== password){
        res.send({ msg: "Неверный пароль" }).status(400);
      }else{
        res.send({name: name})
      }
    }
  })
  .catch(err => res.status(400))
});

module.exports = router;

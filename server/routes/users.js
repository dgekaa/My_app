const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const User = require("../Models/Users");

// Login Page
router.get("/login", (req, res) => {
  res.send({
    data:"Login from server"
  });
});

// Register Page
router.get("/register", (req, res) => {
  res.send({
    data:"Register from server"
  });
});

// Register Handle
router.post("/register", (req, res) => {
  const { name, password, repassword } = req.body; 
  let errors = [];
  if(!name || !password || !repassword){
    errors.push({
      msg: "Заполните обязательные поля"
    })
  }
  if(password !== repassword){
    errors.push({
      msg: "Пароли не равны"
    })
  }
  if(password.length <= 3){
    errors.push({
      msg: "Пароль должен быть больше 3 символов"
    })
  }
  if(errors.length > 0){
    res.send(errors)
  }else{
    User.findOne({ name: name })
      .then(user => {
        if(user){
          errors.push({
            msg: "Пользователь с таким именем существует"
          });
          res.send(errors)
        }else{
          const newUser = new User({
            name, password
          });
          //Hash password
          bcrypt.genSalt(10, (err, salt) => 
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if(err) throw err;
              newUser.password = hash;
              newUser.save()
                .then(user => {
                  res.send({name:newUser.name})
                })
                .catch(err => console.log(err));              
            })
          );
        }
      })
    }
});

// Login Handle
router.post("/login", (req, res) => {
  res.send({
    data: req.body
  });
});

module.exports = router;

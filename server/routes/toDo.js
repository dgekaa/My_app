const express = require('express');
const router = express.Router();

const ToDo = require("../Models/ToDo");

// tytle: {
//   type: String,
// },
// description: {
//   type: String,
// },
// dateTo: {
//   type: Date,
// }

router.get("/all", (req, res) => {
  ToDo.find({})
    .then(todos => res.send(todos))
    .catch(() => res.status(400))
});

router.post("/add", (req, res) => {
  ToDo.create(req.body)
    .then(todo => res.send(todo))
    .catch(() => res.status(400))
});

router.delete("/delete/:id", (req, res) => {
  ToDo.findOne({_id: req.params.id})
    .then(todo =>{
      ToDo.findOneAndDelete({_id: req.params.id})
        .then(() => {
          res.send(todo);
        } )
        .catch(() => res.status(400));
    })
    .catch(() => res.status(400))
  
    
});

module.exports = router;

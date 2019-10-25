const express = require('express');
const router = express.Router();
const Person = require('../Models/person');

router.get('/person', (req, res) => {
    Person.find({})
        .then(data => {
            res.json(data);
        })
});

router.post('/person', (req, res) => {
    Person.create(req.body)
        .then(data => {
            res.json(data);
        });
});

router.put('/person/:id', (req, res) => {
    Person.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(() => {
            Person.findOne({_id: req.params.id})
                .then(data => {
                    res.json(data);
                });
        })
});

router.delete('/person/:id', (req, res) => {
    Person.deleteOne({_id: req.params.id})
        .then(data => {
            res.json(data);
        });
});

module.exports = router;
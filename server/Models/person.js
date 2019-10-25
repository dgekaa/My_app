const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    name: String,
    surname: String,
    age: Number
});

const Person = mongoose.model("Person", PersonSchema);

module.exports = Person;
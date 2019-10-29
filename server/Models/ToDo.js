const mongoose = require('mongoose');
 
const ToDoSchema= new mongoose.Schema({
  tytle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  dateTo: {
    type: Date,
    require: true
  }
},{
  timestamps: true
});

const ToDo = mongoose.model('toDo', ToDoSchema);

module.exports = ToDo;
const mongoose = require('mongoose'); 

const schema = new mongoose.Schema({

  movie: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Movie', 
    required: true
  },
  authorName: {
    type: String, 
    required: true, 
    maxlength: 50
  }, 
  comment: { 
    type: String, 
    required: true, 
    maxlength: 300, 
    timestamps: true
  }
  
});
 
  
module.exports = mongoose.model('Review', schema);

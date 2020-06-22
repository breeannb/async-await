const mongoose = require('mongoose'); 

const schema = new mongoose.Schema({

  title: {
    type: String, 
    required: true, 
    maxlength: 50
  }, 
  description: { 
    type: String, 
    required: true, 
    maxlength: 300
  }, 
  studio: {
    type: String, 
    required: true, 
    maxlength: 300
  }
  
}, {
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      delete ret.id;
      delete ret.__v;
    }
  },
  toObject: {
    virtuals: true }
});

schema.virtual('reviews', {
  ref: 'Review', 
  localField: '_id', 
  foreignField: 'movie'
});
 
  
module.exports = mongoose.model('Movie', schema);

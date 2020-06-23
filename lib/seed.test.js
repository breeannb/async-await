const Movie = require('../lib/models/Movie');
const Review = require('../lib/models/Review');
const seed = require('./seed');
const mongoose = require('mongoose'); 

describe('seed function', () => {
  
  beforeAll(() => {
    return mongoose.connect('mongodb://localhost:27017/seedData', {
      useNewUrlParser: true, 
      useUnifiedTopology: true
    }
    );
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close(); 
  }); 

  it('creates 5 movies', () => {
    return seed()
      .then(() => Movie.find())
      .then(movies => {
        expect(movies).toHaveLength(5);
      });
  });

  it('creates 100 reviews on seed', () => {
    return seed()
      .then(() => Review.find())
      .then(reviews => {
        expect(reviews).toHaveLength(100);
      });
  }); 

  it('creates a specified amount of movies', () => {
    return seed({ movies: 100 })
      .then(() => Movie.find())
      .then(movies => {
        expect(movies).toHaveLength(100); 
      });
  });
  
});




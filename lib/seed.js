const Movie = require('../lib/models/Movie');
const Review = require('../lib/models/Review');
const chance = require('chance').Chance(); 

// use chance to create random data


module.exports = async({ movies = 5 } = {}) => {
  const createdMovies = await Movie.create([...Array(movies)].map(() => ({
    title: `${chance.animal()} is ${chance.color()} and has ${chance.profession()} `,
    description: chance.sentence(), 
    studio: chance.word()
  })));

  await Review.create([...Array(100)].map(() => ({
    movie: chance.pickone(createdMovies)._id,
    authorName: chance.name(), 
    comment: chance.paragraph() 
  })));
};

const request = require('superagent');

const getCharacter = async id => {
  const { body } = await request
    .get(`https://rickandmortyapi.com/api/character/${id}`);
  return {
    name: body.name,
    status: body.status,
    species: body.species
  };
};

const getManyCharacters = ids => {
  return Promise.all(
    ids.map(id => {
      return getCharacter(id);
    })
  );
};

module.exports = {
  getCharacter, 
  getManyCharacters
};


const { getCharacter, getManyCharacters } = require('./rickAndMorty');


describe('getCharacter testing', () => {

  jest.mock('superagent', () => ({
    get: () => {
      return Promise.resolve({
        body: {
          'id': 16, 
          'name': 'Amish Cyborg',
          'species': 'Alien',
          'status': 'Dead',
        }      
      });
    }
  }));
  
  describe('functions to get Rick and Morty character(s)', () => {
  
    it('gets one character from the api', async() => {
      const character = await getCharacter(16);
      expect(character).toEqual({
        'name': 'Amish Cyborg',
        'species': 'Alien',
        'status': 'Dead',
      });
    });



    it('get multiple characters from api', async() => {
      const manyCharacters = await getManyCharacters([1, 20, 16]);
      expect(manyCharacters).toEqual([
        {
          'name': 'Rick Sanchez',
          'status': 'Alive',
          'species': 'Human'
        },
        {
          'name': 'Ants in my Eyes Johnson',
          'species': 'Human',
          'status': 'unknown',
        },
        {
          'name': 'Amish Cyborg',
          'species': 'Alien',
          'status': 'Dead',
        }
      ]);
    }); 
  });
  
}); 

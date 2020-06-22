
const { getCharacter } = require('./rickAndMorty');


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
  });
  
}); 

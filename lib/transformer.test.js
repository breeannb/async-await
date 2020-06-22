const fsPromises = require('fs').promises;
const transform = require('./transform');


describe('transform function', () => {
  beforeAll(() => {
    return fsPromises.writeFile('./transform.txt', 'Star');
  });
  
  afterAll(() => {
    return fsPromises.unlink('./transform.txt');
  });
  
  it('transforms a file', async() => {
    await transform('./transform.txt');
    expect(transform).toEqual('RAT');
  });

});

const fsPromises = require('fs').promises;
const transform = require('./transformer');


describe('transform function', () => {
  beforeAll(() => {
    return fsPromises.writeFile('./transform.txt', 'Star');
  });
  
  afterAll(() => {
    return fsPromises.unlink('./transform.txt');
  });
  
  it('transforms a file', async() => {
    const transformedFile = await transform('./transform.txt');
    expect(transformedFile).toEqual('RAT');
  });

});

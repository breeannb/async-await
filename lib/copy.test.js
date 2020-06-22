const fsPromises = require('fs').promises;
const copy = require('./copy');


describe('copy function', () => {

  beforeAll(() => {
    return fsPromises.writeFile('./hello.txt', 'Hello'); 
  }); 

  afterAll(() => {
    return Promise.all([
      fsPromises.unlink('./hello.txt'), 
      fsPromises.unlink('./hello-copy.txt')
    ]);
  });

  it('copies a file to a new destination', async() => {
    const copiedFile = await copy('hello.txt', './hello-copy.txt');
    expect(copiedFile).toEqual('Hello');
  });

});

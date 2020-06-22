const fsPromises = require('fs').promises;
const copy = require('./copy');


describe('copy function', () => {

  beforeAll(() => {
    return fsPromises.writeFile('./hello.txt', 'Hello'); 
  }); 

  afterAll(() => {
    Promise.all([
      fsPromises.unlink('./hello.txt'), 
      fsPromises.unlink('./hello-copy.txt')
    ]);
  });

  it('copies a file to a new destination', async() => {
    await copy('./hello.txt', './hello-copy.txt');
    const copiedFile = await fsPromises.readFile('hello-copy.txt', { encoding: 'utf8' });
    expect(copiedFile).toEqual('Hello');
  });

});

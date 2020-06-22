const fsPromises = require('fs').promises;

// fsPromises.readFile
// fsPromises.writeFile

module.exports = async(src, dst) => {
  const readFile = await fsPromises.readFile(src, { encoding: 'utf8' });
  await fsPromises.writeFile(dst, readFile);
};


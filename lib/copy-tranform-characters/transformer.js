const fsPromises = require('fs').promises;

module.exports = async(src) => {
  const readFile = await fsPromises.readFile(src, { encoding: 'utf8' });
  const noUpperCaseFile = await readFile.replace(/[^a-z]/g, ''); 
  const allUpperCaseFile = await noUpperCaseFile.toUpperCase(); 
  const transformedFile = await allUpperCaseFile.split('').reverse().join('');
  return transformedFile;

};

  

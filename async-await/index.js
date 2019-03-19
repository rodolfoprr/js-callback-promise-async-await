const request = require('./promise');

const main = async () => {
  const response = await request();

  console.log('All good', response);
};

main();

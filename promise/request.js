const request = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        result: 200
      });
    }, 1000);
  });

module.exports = request;


const checkNumber = (number) => {
    return new Promise((resolve, reject) => {
      if (number > 10) {
        resolve(`The number ${number} is greater than 10`);
      } else {
        reject(`The number ${number} is not greater than 10`);
      }
    });
  };
  
  checkNumber(5)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
  
  checkNumber(15)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
  
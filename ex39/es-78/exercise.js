
const getRandomNumber = (isLogged) => {
    return new Promise((resolve, reject) => {
      if (isLogged) {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        resolve(randomNumber);
      } else {
        reject(new Error('User not logged in'));
      }
    });
  };
  
  const getUserData = (inputNumber) => {
    return new Promise((resolve, reject) => {
      if (inputNumber > 0.5) {
        const userData = {name: 'John', age: 24};
        resolve(userData);
      } else {
        reject(new Error('Input number too low'));
      }
    });
  };
  
  const isLogged = true;
  
  getRandomNumber(isLogged)
    .then((randomNumber) => {
      console.log(`Random number: ${randomNumber}`);
      return getUserData(randomNumber / 10);
    })
    .then((userData) => {
      console.log(`User data: ${JSON.stringify(userData)}`);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log('Promise completed.');
    });
  
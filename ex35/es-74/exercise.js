
function repeatHello(callback) {
    setInterval(() => {
      callback();
    }, 1000);
  }

  repeatHello(() => {
    console.log("Hello");
  });
  
  //arrow functions are shorter in syntax and easy to read and understand. thats why they are perfect for callback functions.
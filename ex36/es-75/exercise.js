
function repeatHello(callback) {
    let count = 0;
    const interval = setInterval(() => {
      if (count < 5) {
        callback();
        count++;
      } else {
        clearInterval(interval);
      }
    }, 1000);
  }
  
  repeatHello(() => {
    console.log("Hello");
  });
  
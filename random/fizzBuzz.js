(function() {

  function fizzBuzz(number) {

    if (typeof number !== "number") {
      return -1;
    } else {
      let index = 1;

      while (index !== number+1) {
        if (index % 3 === 0 && index % 5 === 0) {
          console.log('FizzBuzz');
        } else if (index % 3 === 0) {
          console.log('Fizz');
        } else if (index % 5 === 0) {
          console.log('Buzz');
        } else {
          console.log(index);
        }
      
        index++;
      }
    }
  }

fizzBuzz(15);
}())
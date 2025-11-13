function printPrimeToInput(number) {
  for (let i = 2; i <= number; i++) {
    let divided = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        divided++;
      }
    }
    if (divided == 0) {
      console.log(i);
    }
  }
}

printPrimeToInput(100);

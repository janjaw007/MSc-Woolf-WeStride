function divideBy(number) {
  let divideByThree, divideByEleven;
  let fullThree, fullEleven;

  fullThree = Math.floor(number / 3);
  divideByThree = number - fullThree * 3;

  fullEleven = Math.floor(number / 11);
  divideByEleven = number - fullEleven * 11;

  console.log(divideByThree, divideByEleven);
  console.log(number % 3, number % 11);
}

divideBy(18);

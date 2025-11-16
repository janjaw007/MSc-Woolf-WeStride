function printStairStar(number) {
  let initStar = "";

  // 1. print * number row
  for (let i = 0; i < number; i++) {
    initStar = initStar + "*";
    console.log(initStar);
  }
}

printStairStar(4);

function printStairStarRight(number) {
  let initStart = "";
  let placeholder = "*";

  for (let i = number; i > 0; i--) {
    for (let j = i - 1; j > 0; j--) {
      initStart = initStart + " ";
    }
    for (let k = 0; k < number - i + 1; k++) {
      initStart = initStart + placeholder;
    }
    console.log(initStart);
    initStart = "";
  }
}
printStairStarRight(5);

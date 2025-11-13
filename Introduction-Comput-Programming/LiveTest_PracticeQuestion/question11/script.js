const input = [2, 4, 5, 6, 1, 0, 8];

let min = input[0];
let max = input[0];
input.forEach((num) => {
  if (num < min) min = num;
  if (num > max) max = num;
});

console.log(min);
console.log(max);

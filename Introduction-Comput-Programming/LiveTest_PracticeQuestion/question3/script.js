//เขียน fucntion นำตัวเลข 2 ตัวมายกกำลังแล้ว return ผลลัพธ์

function pow(x, y) {
  let result = x;
  for (let i = 1; i < y; i++) {
    result *= x;
  }
  return result;
}

console.log(pow(8, 2));
console.log(pow(9, 3));
console.log(pow(7, 5));
console.log(pow(6, 6));

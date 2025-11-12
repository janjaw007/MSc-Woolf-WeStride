// question2 เขียน function แปลงจากข้อมูลที่เป็น String เป็น Array
// makeArr("WeStride") ผล ["W","e",.....]

function makeArr(string) {
  const newArr = [];
  for (const char of string) {
    newArr.push(char);
  }
  return newArr;
}

console.log(makeArr("WeStride"));
console.log(makeArr("Zoo"));
console.log(makeArr("ZxCvBn"));

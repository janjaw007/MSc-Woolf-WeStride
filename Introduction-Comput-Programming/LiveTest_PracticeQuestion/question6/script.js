//เขียน function ตรวจสอบนั้นมีช่องว่างทั้งหมดเท่าไหร่
function findSpace(string) {
  let spaceI = 0;
  for (const char of string) {
    char === " " ? spaceI++ : "";
  }
  return `space find ${spaceI}`;
}

console.log(findSpace("Hello World"));
console.log(findSpace("My name is bob"));
console.log(findSpace("WeStride"));

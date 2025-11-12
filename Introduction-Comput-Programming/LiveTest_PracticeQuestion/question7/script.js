//เขียน function แทนช่องว่างด้วยเครื่องหมาย "-"
function replaceSpace(string) {
  const newStr = string.replaceAll(" ", "-");
  return newStr;
}

console.log(replaceSpace("Hello World"));
console.log(replaceSpace("My name is bob"));

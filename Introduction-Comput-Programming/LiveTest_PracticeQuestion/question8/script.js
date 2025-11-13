alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
function decrypt(string) {
  function caseCheck(character) {
    character == character.toLowerCase()
      ? result.push(alphabet[charAt].toLowerCase())
      : result.push(alphabet[charAt].toUpperCase());
  }
  let result = [];
  let charAt = "";
  for (const char of string) {
    if (char == " ") {
      result.push(char);
    } else {
      charAt = (alphabet.indexOf(char.toLowerCase()) + 5) % 26;
      caseCheck(char);
    }
  }
  return result.join("");
}

console.log(decrypt("XvO"));
console.log(decrypt("Ht Ivhz Dn wW"));

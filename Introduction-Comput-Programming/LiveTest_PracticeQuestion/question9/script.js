alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function decrypt(string) {
  let realString = [];
  for (const char of string) {
    let realCharIndex = (alphabet.indexOf(char.toLowerCase()) + 13) % 26;
    let realChar = alphabet[realCharIndex];
    char == char.toLowerCase()
      ? realString.push(realChar.toLowerCase())
      : realString.push(realChar.toUpperCase());
  }
  return realString.join("");
}

console.log(decrypt("AbC"));

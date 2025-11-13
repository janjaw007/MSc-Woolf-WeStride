function decrypt(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let realString = [];

  for (const char of string) {
    if (!alphabet.includes(char.toLowerCase())) {
      realString.push(char);
    } else {
      let realCharIndex = (alphabet.indexOf(char.toLowerCase()) + 13) % 26;
      let realChar = alphabet[realCharIndex];
      char == char.toLowerCase()
        ? realString.push(realChar.toLowerCase())
        : realString.push(realChar.toUpperCase());
    }
  }
  return realString.join("");
}

console.log(decrypt("Hello World!"));

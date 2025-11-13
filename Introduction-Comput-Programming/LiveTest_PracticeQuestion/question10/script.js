const decrypt = (str) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return str
    .split("")
    .map((char) => {
      const index = alphabet.indexOf(char.toLowerCase());
      if (index === -1) return char;

      const shifted = alphabet[(index - 5 + 26) % 26];
      return char === char.toLowerCase() ? shifted : shifted.toUpperCase();
    })
    .join("");
};

console.log(decrypt("cat"));

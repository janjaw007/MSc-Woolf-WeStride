function replaceVowel(str) {
  const vowel = "aeiou".split("");
  let newStr = [];
  //ทำให้ str เป็น arr และทำการ loop
  const arrStr = str.split("");
  for (let i = 0; i < arrStr.length; i++) {
    if (vowel.includes(arrStr[i])) {
      newStr.push(arrStr[i]);
      i += 2;
    } else {
      newStr.push(arrStr[i]);
    }
  }
  console.log(newStr.join(""));
}

replaceVowel("papapripikapa");
replaceVowel("zepelepenapa papapripikapa");
replaceVowel("bapas jepe doposapadnapa opovapa kepemipijapa");

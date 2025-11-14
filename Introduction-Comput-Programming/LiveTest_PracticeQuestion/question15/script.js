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

/* 
function replaceVowel(str) {
  // 1. ([aeiou]) = หากลุ่มสระ (Group 1)
  // 2. p           = ตามด้วย 'p'
  // 3. \1          = ตามด้วยสิ่งที่อยู่ใน Group 1 (สระตัวเดิมเป๊ะๆ)
  // 4. /g          = ค้นหาทุกจุดใน str
  // 5. '$1'        = ให้แทนที่ทั้งหมดที่เจอ (เช่น 'apa') ด้วย Group 1 ('a')
  return str.replace(/([aeiou])p\1/g, '$1');
}

console.log(replaceVowel("zepelepenapa papapripikapa"));
// output: zelena paprika
*/

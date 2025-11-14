function lowerCaseCheck(char) {
  return char.toLowerCase() == char;
}
function upperCaseCheck(char) {
  return char.toUpperCase() == char;
}

function caseCheck(str) {
  if (str.split("").every(lowerCaseCheck)) {
    return "All Small Letter";
  } else if (str.split("").every(upperCaseCheck)) {
    return "All Capital Letter";
  } else {
    return "Mix";
  }
}

console.log(caseCheck("12345"));

/* 
function caseCheck(str) {
  const chars = str.split("");

  // 1. เช็กว่า "มี" ตัวพิมพ์เล็ก (a-z) อยู่ในอาเรย์บ้างไหม?
  const hasLower = chars.some((char) => {
    return /[a-z]/.test(char); // .test() จะคืน true ถ้า char เป็น a-z
  });

  // 2. เช็กว่า "มี" ตัวพิมพ์ใหญ่ (A-Z) อยู่ในอาเรย์บ้างไหม?
  const hasUpper = chars.some((char) => {
    return /[A-Z]/.test(char); // .test() จะคืน true ถ้า char เป็น A-Z
  });

  // 3. เอาผลลัพธ์มาตัดสินใจ
  if (hasUpper && !hasLower) {
    return "All Capital Letter";
  } else if (!hasUpper && hasLower) {
    return "All Small Letter";
  } else {
    // กรณีอื่นๆ (มีทั้งคู่ หรือ ไม่มีเลย)
    return "Mix";
  }
}

// Test
console.log(caseCheck("ABCDEFG")); // All Capital Letter
console.log(caseCheck("abcdefg")); // All Small Letter
console.log(caseCheck("This 's a cat")); // Mix
console.log(caseCheck("12345")); // Mix (ถูกต้องแล้ว!)
console.log(caseCheck("HELLO WORLD")); // All Capital Letter (แก้ Bug เรื่อง Space)

*/

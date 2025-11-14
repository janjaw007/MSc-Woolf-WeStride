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

function isPalindrome(line) {
  line += '';
  let j = line.length - 1;
  let i = 0;
  while (i < j) {
    if (line[i] !== line[j]) {
      return false;
    }
    i += 1;
    j -= 1;
  }
  return true;
}

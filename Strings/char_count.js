let str = "I am ram kumar";
let wordCount = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] !== ' ') {
    wordCount++;
  }
}

console.log(wordCount); // Output: 11

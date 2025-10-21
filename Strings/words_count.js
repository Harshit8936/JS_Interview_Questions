let str = "I am ram kumar";
let wordCount = 0;
let inWord = false; 

for (let i = 0; i < str.length; i++) {
  if (str[i] !== ' ' && !inWord) {
    wordCount++;
    inWord = true;
  } else if (str[i] === ' ') {
    inWord = false;
  }
}

console.log(wordCount); // Output: 4

// removes duplicates elements

// reverse the string without inbuilt function


// display: none removes the element from the layout, while visibility: hidden keeps the space but hides the element.

let str = "Welcome to the Javascript Series";
let result = "";
let word = ""

for(let i=str.length-1;i>=0;i--){
  const char = str[i];
  if(char === ' '){
      result += word + ' ';     // Add the current word to the result
      word =''                  // Reset word for the next one
  }else{
    word = char + word      // build the current word in reverse
  }
}
if(word){         // for last word
  result += word
}

console.log(result)
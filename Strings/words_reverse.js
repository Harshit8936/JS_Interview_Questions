// const str = "How are you?"
// var rev = str.split(" ").reverse().join(" ")
// console.log(rev)   // you? are How

// var rev = str.split("").reverse().join("")
// console.log(rev)   // ?uoy era woH

function reverseWords(str){
    let result = '';
    let word = '';
    for(let i=str.length-1; i>=0;i--){
        const char = str[i];
        if(char == ' '){
            if(word){
                // Add the current word to the result
                result += word + ' ';
                word = ''   // Reset word for the next one
            }
        }else{
            // build the current word in reverse 
            word = char + word
        }
    }
     // Add the last word if there is one
     if (word) {
        result += word;
    }
    return result
}


const input = "How are you?";
const reversed = reverseWords(input);
console.log(reversed); // Output: "you? are How"





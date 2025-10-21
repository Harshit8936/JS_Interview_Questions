// Find a longest word in a string
/*
write a function that takes a string as an input and returns the longest word in the string. 
If there are multiple longest words, return the first encountered word
*/


// overall depend on unicode values
// A = 65, Z=90
// a = 97, z=120
// if you are sorting then A will come first then a will come later


const findLongestWord = (str)=>{
        if(str.trim().length===0){
                return false
        }
        strArr = str.split(' ');            // double code means it will split your space in your given string and if you are not "" in split then simply convert your string to array
        console.log(strArr.length);             // to find the number of words in a given string
        // while using sort method it will work on unicode values by default asc order
        // using at in ascending order
        // strArr = strArr.sort((a,b)=>a.length - b.length);
        //   return strArr.at(-1)
        // using desc order
        strArr = strArr.sort((a,b)=>b.length - a.length);
        console.log(strArr);
        return strArr[0];

        // using reduce method
        // return strArr.reduce((prev,curr)=>(curr.length>prev.length?curr:prev),"")
}



console.log(findLongestWord('Watch Thapa Technical Javascripthello on youtube'))



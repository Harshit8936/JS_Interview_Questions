// Hash tag generator

/*
You are required to implement a function genearetHAsh that generate the hashtag from a given input string 
*/

// each word should be capitialized and concanetend with spaces.

const generateHashTag = (str)=>{
    if(str.length>280 || str.trim().length === 0){
        return false
    }
    str = str.split(" ")
    console.log(str);
    str = str.map((value)=>value[0].toUpperCase() + value.slice(1));
    console.log(str);
    str = `#${str.join("")}`;
    console.log(str);
    return str

}

console.log(generateHashTag('my name is harshit bhargav'));
// o/p---> #MyNameIsHarshitBhargav

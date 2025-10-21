// count of occurances of character


const countChar = (str,character)=>{
    str = str.toLowerCase();
    character = character.toLowerCase();
    countCharacter = str.split("").reduce((prev,curr)=>{
        if(curr === character){
            prev++
        }
        return prev
    },0)
    return countCharacter
}


console.log(countChar("MissIsSippi","I"));      // output-4

function countChar(str,character){
    str = str.toLowerCase()
    character = character.toLowerCase();
    let count = 0
    for(let i=0;i<str.length;i++){
        if(str[i]===character){
            count++
        }
    }
    return console.log(`${character} found ${count} times`)
}

countChar("Missisipi","I")


function countChar(str,character){
    str = str.toLowerCase()
    character = character.toLowerCase();
    let count = 0
    let indexes = []
    for(let i=0;i<str.length;i++){
        if(str[i]===character){
            count++
            indexes.push(i)
        }
    }
    if(count===0){
        return console.log(`${character} found ${count} times`)
    }
    if(indexes.length>=2){
    return console.log(`2 occurance of ${character} found at ${indexes[1]}`)
    }else{
        return console.log(`Not found 2 occurance of ${character}`)
    }
}

countChar("Missisipim","i")



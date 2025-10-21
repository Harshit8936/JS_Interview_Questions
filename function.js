function fetchData(){

}

console.log(fetchData())        // undefined

async function fetchData1(){

}
console.log(fetchData1())   // Promise {undefined}

async function fetchData2(){
    return 1
}
console.log(fetchData2())   // Promise {1}


function baby(){
    return "somethig"
}
console.log(baby.name)  // baby

console.log(baby().name)    // undefined



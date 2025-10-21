let arr = [1, [2, 3], 4, [5, 6], [8,[9,[10]]]];

// console.log(arr.flat(Infinity))

function flattenArray(arr){
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            newArr = newArr.concat(flattenArray(arr[i]))
        }else{
            newArr.push(arr[i])
        }
    }
    return newArr;
}
console.log(flattenArray(arr))


/*output = [
    {
        "category" : "c1",
        "product" : ["p1", "p2"]
    },
    {
        "category" : "c2",
        "product" : ["p3", "p5"]
    }
] */


let array = [
    {
        "category" : "c1",
        "product" : "p1"
    },
    {
        "category" : "c1",
        "product" : "p2"
    },
    {
        "category" : "c3",
        "product" : "p4"
    },
    {
        "category" : "c5",
        "product" : "p3"
    },
    {
        "category" : "c2",
        "product" : "p5"
    },
    {
        "category" : "c2",
        "product" : "p6"
    },
    {
        "category" : "c2",
        "product" : "p7"
    }
]



const response = array.reduce((acc,curr)=>{
    if(!acc[curr.category]){
        acc[curr.category] = {category:curr.category,product:[]}
    }
    acc[curr.category].product.push(curr.product)
    return acc;
},{})
console.log(response)

const output = Object.values(response);
console.log(output)



let grouped = array.reduce((acc, item) => {
    (acc[item.category] = acc[item.category] || []).push(item.product);
    return acc;
}, {});


console.log(grouped)



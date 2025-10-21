// let add = (a)=>{
//     return (b)=>{
//         return b ? add(a+b) : a
//     }
// }

function add(a){
    return (b)=>{
        return b ? add(a+b) : a
    }
}

console.log(add(1)(2)(3)())
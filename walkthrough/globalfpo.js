// folderName:{
//     type:String,
//     child_folder:[{
//         type:Types.ObjectId,
//         ref:'UserModel'
//     }]
// }


// BEGIN

// Update users set balance = balance - 100 where id=10

// Update users set balanace = balance + 100 where id = 50

// COMMIT

// END;

const sampleData = {   id: 1,   name: 'Alice',   
    details: {     age: 30,     hobbies: ['reading', { name: 'coding' }]   },  
       projects: [     { name: 'Project A', status: 'completed' }, { name: 'Project B', status: 'in-progress' } ] };

// let arr = []
// arr.push(sampleData.name)
// sampleData.details.hobbies.forEach(element=>{
//     if(typeof element === 'object' && element.name){
//         arr.push(element.name)  
//     }
// })  
// sampleData.projects.forEach(project=>{
//     arr.push(project.name)
// })  
// console.log(arr)   // [ 'Alice', 'coding', 'Project A', 'Project B' ]

function getNames(obj){
    let names = []
    if(Array.isArray(obj)){
        obj.forEach(element=>{
            names = names.concat(getNames(element))
        })
    }else if(typeof obj==='object' && obj!==null){
        if(obj.name) names.push(obj.name);
        Object.values(obj).forEach(item=>{
            names = names.concat(getNames(item))
        })
    }
    return names
}   

console.log(getNames(sampleData)) // [ 'Alice', 'coding', 'Project A', 'Project B' ]
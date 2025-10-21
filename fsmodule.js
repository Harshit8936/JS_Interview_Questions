const fs = require('fs');
const os = require('os');
console.log(os.cpus().length)  // 4
// it means mere pass 4 cpus hai maximum threads mere pass 4 honge

// console.log("Start");
// const data = fs.readFileSync('file.txt','utf-8')
// console.log(data)
// console.log("End")

// read file synchronous above function will work as synchronoulsy or Blocking operations

console.log("Start");

const data = fs.readFile('file.txt','utf-8',(err,data)=>{
    if(!err){
        console.log(data)
    }else{
        console.log(err)
    }
})


console.log("End")


// above function will work as asynchronous or Non-blocking operations


// fs.readFile('file.txt',(data,err)=>{
//     if(!err){
//         console.log(data)
//         let data1 = data.toString();
//         console.log(data1)
//     }else{
//         console.log(err)
//     }
// })
// in above function if we are not using utf-8 then they will throw the buffer then we need to convert to string


// var datas = fs.writeFileSync('file1.txt','This is datas to write the file');
// console.log(datas);

// above function is used to write the file will work as syncrounuous

// fs.writeFile('file1.txt','This is data to write the file.This is data to write the file',(err,data)=>{
//         if(!err){
//             console.log("COol file write success")
//         }else{
//             console.log("OOPS",err)
//         }
// })



console.log("FS MODULE")
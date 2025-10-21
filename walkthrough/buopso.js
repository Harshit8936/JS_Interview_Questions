async function showData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data =  await res.json();
    
   
    // const rs = data.filter(item=>item.completed==false)
    
    // .reduce((acc,curr)=>{
    //     if(!acc[curr.id]){
    //         acc[curr.id] = curr.title
    //     }
    //     return acc;
    // },{})

    // let obj ={};
    // for(let item of data){
    //     if(!item.completed){
    //         obj[item.id] = item.title
    //     }
    // }

    
    // console.log(obj)

    // const newData = data.aggregate([
    //     {
    //         $match:{completed:false}
    //     },
    //     {
    //         $count:{Datacount:{$sum:1}}
    //     }
    // ]);
    
    
    // [{"id":"1","title":"Anyhting",},]

    

    // console.log("Count",rs.length)
    // return data;
   
}

showData()
// { "2": "title of id 2", "3": "title against id 3" }


setTimeout(()=>{
    console.log("in timeout")
},0)
console.log("Start");
const a = new Promise((resolve,reject)=>{
    console.log("Promise const")
    resolve()
});

console.log("First")

a.then(()=>{
    console.log("Promise resolved")
})

console.log("Outside")

queueMicrotask(()=>{
    console.log("in queue microtask")
})

process.nextTick(()=>{
    console.log("inside nexttick")
})

/*
Start
Promise const
First
Outside
inside nexttick
Promise resolved
in queue microtask
in timeout
*/
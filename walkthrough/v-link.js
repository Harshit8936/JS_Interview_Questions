const a = 100;
setImmediate(()=> console.log("Set Immediate"),0);
 
Promise.resolve().then(() => console.log('Promise'));
 
setTimeout(()=>console.log("Timer Expired"), 0);
 
process.nextTick(()=> console.log("NextTick"));
 
function logA(){
	console.log("a = ", a)
}
 
logA()


setImmediate(()=> console.log("Set Immediate"),1000);
 
Promise.resolve().then(() => console.log('Promise'));
 
setTimeout(()=>console.log("Timer Expired"), 1000);
 
process.nextTick(()=> console.log("NextTick"));



setImmediate(()=> console.log("Set Immediate"),0);
 
Promise.resolve().then(() => console.log('Promise'));
 
setTimeout(()=>console.log("Timer Expired"), 1000);
 
process.nextTick(()=> console.log("NextTick"));



// find 3 highest salary in mongodb
db.employees.insertMany([
	{empId: 1, name: 'Clark', dept: 'Sales',salary:5000 },
	{empId: 2, name: 'Clark', dept: 'Sales',salary:7000 },
	{empId: 3, name: 'Clark', dept: 'Sales',salary:6000 },
	{empId: 4, name: 'Clark', dept: 'Sales',salary:7000 },
	{empId: 5, name: 'Clark', dept: 'Sales',salary:6000 },
  ]);
db.employees.aggregate([
    {
        $group:{_id:"$salary"}
    },
    {
        $sort:{_id:-1}
    },
    {
        $skip:2
    },
    {
        $limit:1
    },
    {
        $project:{
            salary:"$_id",
            _id:0
        }
    }
])
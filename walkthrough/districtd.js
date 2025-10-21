
let flag = true;
setTimeout(() => {
    flag = false;
    console.log("I am changing");
}, 1);
while (flag) {
    console.log('Hello world');
}




console.log("Line 1 " ,a); 
var a = 10;
function test() {
  console.log("line 2 " ,a);  // Line 2
  var a = 20;
  setTimeout(() => {
    console.log("set timeout",a);  // Line 3
  }, 0);
  Promise.resolve().then(() => {
    console.log("resolve",a);  // Line 4
  });
  console.log(" line 5 ",a);  // Line 5
}
test();
console.log("line 6 ",a);  // Line 6
/* 
Line 1 undefined
line 2 undefined
line 5 20
line 6 10
resolve 20
set timeout 20

*/



async function fun(wait) {
    console.log("a");
    await wait();
    console.log("b");
}

function wait() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Wait is executing");
            resolve();
        }, 2000);
    });
}

fun(wait);

async function fun() {
  console.log("a");
  await new Promise(resolve => {
      setTimeout(() => {
          console.log("Wait is executing");
          resolve();
      }, 5000);
  });
  console.log("b");
}
fun();


// shree g baba nagar, sector 19, dono railway pull ke beech mein shankaracharya marg, yogda ke saamne




// person(name,gender)
// {ram,male},{shyam,female}

/*
-- create
CREATE TABLE EMPLOYEE (
  empId int,
  name varchar(15),
  gender varchar(10)
);

-- insert
INSERT INTO EMPLOYEE(empId,name,gender) VALUES (1, 'Clark', 'male');
INSERT INTO EMPLOYEE(empId,name,gender) VALUES (2, 'Dave', 'female');
INSERT INTO EMPLOYEE(empId,name,gender) VALUES (3, 'Ava', 'male');

-- fetch 
UPDATE EMPLOYEE SET gender=CASE 
WHEN gender='male' THEN 'female' 
WHEN gender='female' THEN 'male'
END;
SELECT * FROM EMPLOYEE;
GO


*/


// in mongodb

db.users.updateMany({gender:{$in:['male','female']}},{$set:{
  gender:{
    $cond:{
      if:{$eq:['$gender','male']},
      then:'female',
      else:'male'
    }
  }
}})


// postgres default port 5432
// mysql default port 3306

const x = [
	{a: 5, b:10},
	{a: 4, b:0},
	{a: 1, b:05},
	{a: 3},
	{b: 7, c:0x98},
	{d: 'shyam', c:8},
];

let sum =0
x.forEach(obj=>{
    for(let key in obj){
        let value = obj[key];
        if(typeof value==='number' && value %2===0 && !isNaN(value)){
            sum += value
        }
    }
})

console.log(sum)


// avoid hexadecimal values in object keys
 /**
  
  
const y = {
	a: [{a: 5, b:10}, {a: 4, b:0}, {a: 1, b:05},{a: 3}],
	b: [{a: 5, b:10}, {a: 4, b:0}, {a: 1, b:05}, {b: 7, c:0x98}],
	c: [{b: 7, c:0x98}, {d: 'shyam', c:8}],
	d: [{d: 'shyam', c:8}],
}
  let sum = 0;

for (let key in y) {
  y[key].forEach(obj => {
    Object.values(obj).forEach(value => {
      if (typeof value === 'number' && value % 2 === 0) {
        sum += value;
      }
    });
  });
}
  */









// const b = 'a';
// var x = {a: 10};
// var y = {10: 'x', 11: 'y'};
// console.log(y[x[b]]);


// b= 'a'
// y[x['a']];
// y[10];
// 'x'    // output

// const a = 05
// console.log(a);  // 5












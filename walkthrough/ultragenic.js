// for(let i=1;i<=10;i++){
//     setInterval(() => {
//         console.log(i)
//     }, 1000);
// }                

// 1,2,3,4,5,6,7,8,9,10    continously running loop till infinite

for(let i=1;i<=10;i++){
    setTimeout(() => {
        console.log(i)
    }, 1000);
}                   // 1,2,3,4,5,6,7,8,9,10

const intervalId1 = setInterval(()=>{
    console.log("Hello")
    clearInterval(intervalId1)
  },1000)
console.log("intervalId1",intervalId1)

const timeout1 = setTimeout(() => {
    console.log("hello from timeout")
}, 1000);
console.log("timeout1",timeout1)


// to print 1 to 10 in after 1 second

let count = 1;
const intervalId = setInterval(()=>{
    console.log("count",count)
    count++
    if(count>10) clearInterval(intervalId)

},1000)

let count1=1
const timeoutId = setTimeout(()=>{
    console.log("count1",count1)
    // count1++             // this will not go inside this just console and finish it
    // if(count1>10){
    //     clearInterval(timeoutId)
    // }
},1000)



/*
When you initialize count inside the setInterval function, 
the variable is re-declared and set to 1 every time the function runs. 
This means that each time the interval triggers (every second in this case), 
a new instance of count is created, and it always starts at 1.

(count++) happens but doesn't affect the next iteration 
because the next call to the function starts with a fresh count initialized to 1 again.


If you want to keep a persistent count, you should declare it outside the function:
*/


// mongodb to count head count of each employee city wise

/*
-- create
CREATE TABLE EMPLOYEE (
  empId int,
  name varchar(15),
  dept varchar(10),
  city varchar(10),
);

-- insert
INSERT INTO EMPLOYEE(empId,name,dept,city) VALUES (1, 'Clark', 'Sales','delhi');
INSERT INTO EMPLOYEE(empId,name,dept,city) VALUES (2, 'Dave', 'Accounting','gurgaon');
INSERT INTO EMPLOYEE(empId,name,dept,city) VALUES (3, 'Ava', 'Sales','delhi');
INSERT INTO EMPLOYEE(empId,name,dept,city) VALUES (4, 'Ram', 'Sales','mumbai');
INSERT INTO EMPLOYEE(empId,name,dept,city) VALUES (5, 'Dave', 'Accounting','gurgaon');
INSERT INTO EMPLOYEE(empId,name,dept,city) VALUES (6, 'Shyam', 'Sales','hyderabad');

-- fetch 
SELECT city, count(empId) as EMPCOUNT from EMPLOYEE group by city order by EMPCOUNT

GO


*/


/*
-- create
CREATE TABLE EMPLOYEE (
  empId int,
  name varchar(15),
  dept varchar(10),
  city int,
);

CREATE TABLE CITY (
  id int,
  name varchar(15),
);

-- insert
INSERT INTO EMPLOYEE(empId,name,dept,city) VALUES (1, 'Clark', 'Sales',1);
INSERT INTO EMPLOYEE(empId,name,dept,city) VALUES (2, 'Dave', 'Accounting',2);
INSERT INTO EMPLOYEE(empId,name,dept,city) VALUES (3, 'Ava', 'Sales',1);
INSERT INTO EMPLOYEE(empId,name,dept,city) VALUES (4, 'Ram', 'Sales',3);
INSERT INTO EMPLOYEE(empId,name,dept,city) VALUES (5, 'Dave', 'Accounting',4);
INSERT INTO EMPLOYEE(empId,name,dept,city) VALUES (6, 'Shyam', 'Sales',2);

INSERT INTO CITY(id,name) VALUES (1, 'delhi');
INSERT INTO CITY(id,name) VALUES (2, 'mumbai');
INSERT INTO CITY(id,name) VALUES (3, 'hyderabad');
INSERT INTO CITY(id,name) VALUES (4, 'gurgaon');



-- fetch 
SELECT CITY.name as CITYNAME, count(EMPLOYEE.empId) as EMPCOUNT from EMPLOYEE join CITY on EMPLOYEE.city = CITY.id group by CITY.name

GO



*/
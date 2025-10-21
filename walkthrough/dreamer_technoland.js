// secure react application
// logs maintain in express server which library we can use to maintain logs

function sum (a=5, b=2){
    console.log(a + b);
}
 
sum(null,20)        // 0+20 = 20
sum(undefined,20)  // 5+20 = 25
sum(0,20)          // 0+20 = 20
sum(true,20)        // 1+20 = 21
sum(false,20)       // 0+20 = 20
sum("",20)          // 0+20 = 20
sum(" ",20)         // 0+20 = 20
sum("a",20)         // a20
sum([],20)          // 0+20 = 20
sum({},20)          // [object Object]20
sum(10,20)          // 10+20 = 30
sum(10,20,30)       // 10+20 = 30
sum(10)             // 10+2 = 12
sum()               // 5+2 = 7

/*
So, a becomes null and b becomes 20. In JavaScript, 
when you try to add null to a number, null is coerced to 0. Therefore, the sum will be 0 + 20 = 20.

*/


let x = [1,2,3];
 

function showEle(index){
    showEle(index+1)
    if(index<x.length){
        if(x==1 && x==2 && x==3){
            console.log("Pass")	
}
    }
    
}


showEle(0)


console.log("start")
 
const promise = new Promise(
	(resolve,reject)=>{
	console.log(1)
 
})
 
console.log("End");



let arr = [1,2,3,4,5];
 
for (var i = 0;i<arr.length;i++){
	setTimeout(()=>{
		console.log(arr[i])
	},100)
}

/*
Because setimeout is async function and it will execute after the loop is completed 
and loop uses var which create a function scoped variable i. By the time settimeout callback executes
the loop alreday finished. that's why it will print undefined 5 times

if we take let instead of var then it will print 1 2 3 4 5 because let is block scoped variable

*/


console.log(0.1+0.2===0.3)
console.log(0.1+0.2==0.3)

/*
0.1 + 0.2 in JavaScript doesn't exactly result in 0.3 due to the way floating-point numbers are represented in binary. 
When you add 0.1 and 0.2, the result is a value slightly different from 0.3, like 0.30000000000000004.

*/


console.log(3>2>1)   // false 2>1 = true and true>1 = false

console.log(typeof null) // object

console.log(typeof undefined) // undefined

console.log(1 < 2 < 3); // true < 3 => true


import React, { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const [posts, setPost] = useState([]);
  const [query, setQuery] = useState('');
  const [debounceTimeout, setDebounceTimeout] = useState(null);
  const changeHandler = (e) => {
    const value = e.target.value;
    setQuery(value);        // Set query immediately to reflect input change
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    const timeout = setTimeout(() => {
      setQuery(value);         // Update query after debounce delay
    }, 500);
    setDebounceTimeout(timeout);
  };
  console.log(query);
  const getPosts = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (res.ok) {
        const data = await res.json();
        if (data) {
          setPost(data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.body.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <input type="text" name="search" onChange={changeHandler} value={query} />
      <h1>Total Posts: {filteredPosts.length}</h1>
      <ul>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => {
            return (
              <li key={post.id}>
                {post.title}
                <p>{post.body}</p>
              </li>
            );
          })
        ) : (
          <li>No post found</li>
        )}
      </ul>
    </div>
  );
}


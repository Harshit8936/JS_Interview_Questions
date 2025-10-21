// for(){}
// for(){}
// for(){
//      for(){}
// }

// diff b/w hashing and encryption
// behind logic of compare function

// Hashing: Primarily used for data integrity verification. It produces a fixed-size output (hash) from input data (like a password or file) and is used to check if the data has been altered.
// Encryption: Used for confidentiality. It transforms readable data (plaintext) into an unreadable format (ciphertext) to protect it from unauthorized access.

//Hashing: One-way process. Once data is hashed, it cannot be reversed to retrieve the original data. It’s meant to verify the data rather than recover it.
//Encryption: Two-way process. Encrypted data can be decrypted back to its original form using the correct key.

// facet


console.log(x);
var x = 5;


const obj = { age: 32, name: 'test' };
const array = [obj, obj, obj];
array[1].name = 'test2';
console.log(array[0].name);

let arr = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr == arr2);
console.log(arr === arr2);




if ((0.1 + 0.2) == 0.3) {
  console.log("1");
} else {
  console.log("2",0.1 + 0.2);
}


var x=1, y="2",
z=x+y;
a = x-y
console.log(z);
console.log(a);



const users = [ { "id": 1, "name": "Paul" }, { "id": 2, "name": "John" } ]
const posts = [ { "id": 1, "userId": 2, "title": "Teaching Node" }, { "id": 2, "userId": 1, "title": "Teaching Go" }, { "id": 3, "userId": 1, "title": "Teaching Python" } ]


  // Required Response
  // [
  //       {
  //           "id": 1,
  //           "name": "Paul",
  //           "posts": [
  //               {
  //                   "id": 2,
  //                   "userId": 1,
  //                   "title": "Teaching Go"
  //               },
  //               {
  //                   "id": 3,
  //                   "userId": 1,
  //                   "title": "Teaching Python"
  //               }
  //           ]
  //       },
  //       {
  //           "id": 2,
  //           "name": "John",
  //           "posts": [
  //               {
  //                   "id": 1,
  //                   "userId": 2,
  //                   "title": "Teaching Node"
  //               }
  //           ]
  //       }
  //   ]



const response = users.map(user=>{
  return {
    id: user.id,
    name: user.name,
    posts: posts.filter(post=>post.userId===user.id)
  }
})

console.log(response)

response.forEach((user)=>{
  console.log(`Name: ${user.name}`);
  user.posts.forEach((post)=>{
  console.log(`Title: ${post.title}`)
})
})

const getUsersWithPosts = () => {
  return users.map(user => ({
      ...user,
      posts: posts.filter(post => post.userId === user.id)
  }));
};

const usersWithPosts = getUsersWithPosts();
console.log(usersWithPosts);



/*
Common Time Complexities:

O(1): Constant time. The algorithm’s execution time does not depend on the input size.
O(log n): Logarithmic time. The algorithm reduces the problem size by half in each step (e.g., binary search).
O(n): Linear time. The algorithm processes each input element once (e.g., linear search).
O(n log n): Log-linear time. Often arises in efficient sorting algorithms like merge sort and quicksort.
O(n^2): Quadratic time. Common with algorithms that use nested loops (e.g., bubble sort).
O(2^n): Exponential time. The algorithm's time grows exponentially as the input size increases (e.g., brute-force solutions to problems like the traveling salesman).
O(n!): Factorial time. Usually arises in problems that involve generating permutations (e.g., brute-force solution to the traveling salesman problem).


*/


/*
Common Space Complexities:

O(1): Constant space. The algorithm only uses a fixed amount of space, independent of the input size.
O(n): Linear space. The space used grows linearly with the size of the input (e.g., creating a copy of the input array).
O(n^2): Quadratic space. Space grows quadratically with the size of the input (e.g., using a 2D matrix with size 
𝑛
×
𝑛
n×n).

*/
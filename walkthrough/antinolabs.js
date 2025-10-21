function helloPromise(){
  return new Promise((resolve,reject)=>{
      let number = Math.floor(Math.random() * 10)+1;
      // console.log(number)
      if(number % 2==0){
        resolve("Even")
      }else{
        reject("Odd")
      }
  })
}

helloPromise().then((data)=>{
  console.log(data)
}).catch((error)=>{
  console.log(error)
})

// const sleep = (time = 1000) => new Promise(resolve => (setTimeout(resolve, time)));

const promise = new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
      console.log("timerStart");
      resolve("success");
      console.log("timerEnd");
    }, 0);
    console.log(2);
  });
  promise.then((res) => {
    console.log(res);
  });
  console.log(4);
  

  
  db.persons.aggregate([
    {
    $lookup:
    {
        from:'books',
        localField:'_id',
        foreignField:'author_id',
        as:'data'
    },
    $group:{_id:"$data.author_id",$ne:{}}
    }
    ])
  
  // 4, 1 ,2, timestart timened, success

  // Authors Table:

  // id	       name
  // 1	       J.K. Rowling
  // 2	       George Orwell
  // 3	       J.R.R. Tolkien

  // Books table
// id	  book_name	        author_id
// 1	  Harry Potter	        1
// 2	  Fantastic Beasts	    1
// 3	  1984	                2
// 4	  Animal Farm	          2
// 5	  The Hobbit	          3
// 6	  The Lord of the Rings	3

  
// write a sql query to get all authors name along with books name

// select authors.name,books.name from authors join books on authors.id=books.authorId;


// sample output 


// author_name	    book_name
// J.K. Rowling	    Harry Potter
// J.K. Rowling	    Fantastic Beasts
// George Orwell	    1984
// George Orwell	    Animal Farm
// J.R.R. Tolkien	    The Hobbit
// J.R.R. Tolkien	    The Lord of the Rings





// write a sql query who didn't write any single book

// select authors.name from authors left join books on authors.id = books.authorId where books.book_id IS NULL 




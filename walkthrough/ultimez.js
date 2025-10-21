// ----------------1-------------------------

console.log('Start');

setTimeout(() => console.log('Timeout 1'), 0);

setImmediate(() => console.log('Immediate'));

process.nextTick(() => console.log('Next Tick'));

Promise.resolve().then(() => console.log('Promise'));

console.log('End');

// ------------2------------------------------------
// const fs = require('fs');

// fs.writeFile('example.txt', 'Hello, world!', (err) => {
//   if (err) throw err;
//   console.log('File written successfully');
//   fs.readFile('example.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log('File content:', data);
//   });
// });

/*
You are tasked with building a simple REST API for managing a collection of books. The API should support the following operations:
Get all books: Retrieve a list of all books.
Get a book by ID: Retrieve a specific book by its unique ID.
Add a new book: Add a new book to the collection.
Update a book: Update an existing book's details.
Delete a book: Remove a book from the collection
Design and implement the REST API using Node.js & Express.js. Ensure proper error handling & validation of inputs

*/

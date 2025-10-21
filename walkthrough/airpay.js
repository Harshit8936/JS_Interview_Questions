const products = [ 
  { type: 'fruit', name: 'apple', quantity: 5 },   
  { type: 'vegetable', name: 'carrot', quantity: 3 },   
  { type: 'fruit', name: 'banana', quantity: 2 },   
  { type: 'dairy', name: 'milk', quantity: 1 },   
  { type: 'vegetable', name: 'broccoli', quantity: 4 } ];
  
  
const response = products.reduce((acc,curr)=>{
    if(acc[curr.type]){
      acc[curr.type] += curr.quantity
    }else{
      acc[curr.type] = curr.quantity
    }
    return acc;
},{})
console.log(response)

// select name, devices.device_name as DeviceName 
// from users join devices on users.id = devices.userId order by devices.last_used desc;



/*
in mongoose schema if one field is not required and that field is unique true then 
if data is coming null so it will insert in db or not

In summary, Mongoose will insert null values even if the field is marked as unique: true and required: false. 
However, be mindful that MongoDB does not treat null as a "duplicate" when enforcing uniqueness constraints.


If you are setting the email to an empty string (""), it will still be treated as a distinct value (unlike null), and MongoDB will enforce the uniqueness constraint as expected.



const user1 = new User({ name: 'John Doe', email: '' });
await user1.save();  // This will be allowed

const user2 = new User({ name: 'Jane Doe', email: '' });
await user2.save();  // This will fail due to unique constraint



In Sequelize, if a column has a unique: true constraint, an empty string ("") is considered a unique value. You won't be able to insert multiple rows with "" in a field that has unique: true.
*/
// SELECT first_name||' '||last_name as FullName,count(orders.customer_id) as OrderCount from customers join orders on customers.customer_id = orders.customer_id group by FullName having OrderCount >=2
// Step 1: Group by customer_id to count the number of orders per customer
// Step 2: Filter customers who have at least 2 orders
// Step 3: Lookup to join with the customers collection to get first_name and last_name
 // Step 4: Project the result, concatenating first_name and last_name as FullName
 db.orders.aggregate([
  {
      $group:{_id:"$customerId",orderCount:{$sum:1}}
  },
  {
      $match:{orderCount:{$gte:2}}
  },
  {
      $lookup:{
          from:'customers',
          localField:'_id',
          foreignField:'_id',
          as:'customerDetails'
      }
  }
  ])



  /*
  {
      $project: {
        FullName: { $concat: [{ $arrayElemAt: ["$customer_info.first_name", 0] }, " ", { $arrayElemAt: ["$customer_info.last_name", 0] }] },
        OrderCount: 1
      }
  
  */

      db.orders.aggregate([
        {
            $lookup:{
                from:'customers',
                localField:'customerId',
                foreignField:'_id',
                as:'customerDetails'
            }
        },
        {
            $group:{_id:"$customerId",orderCount:{$sum:1}}
        },
        {
            $match:{orderCount:{$gte:2}}
        },
        {
            $project:{
                customer_id:"$_id",
                orderCount:1,
                _id:0
            }
        }
    ])


    // for those who have not ordered
    db.customers.aggregate([
      {
          $lookup:{
          from:'orders',
          localField:'_id',
          foreignField:'customerId',
          as:'orderDetails'
          }
      },
      {
          $match:{orderDetails:{$size:0}}
      }
  ])

  // OR
  db.customers.aggregate([
    {
        $lookup:{
            from:'orders',
            localField:'_id',
            foreignField:'customerId',
            as:'orderDetails'
        }
    },
    {
        $match:{orderDetails:{$eq:[]}}
    }
])


  // don't want who have not placed any order
  db.customers.aggregate([
    {
        $lookup:{
            from:'orders',
            localField:'_id',
            foreignField:'customerId',
            as:'orderDetails'
        }
    },
    {
        $match:{orderDetails:{$ne:[]}}
    }
])
  
  
  // with orderCount and total amount
  
  db.orders.aggregate([
    {
        $lookup:{
            from:'customers',
            localField:'customerId',
            foreignField:'_id',
            as:'customerDetails'
        }
    },
    {
        $group:{_id:'$customerId',orderCount:{$sum:1},totalAmount:{$sum:'$amount'}}
    },
    {
        $match:{totalAmount:{$gte:200}}
    }
])


function exec(str){
    str =  str.toLowerCase().split(' ');
    str = str.map(item=>item[0].toUpperCase()+item.slice(1))
    str = str.reverse().join(' ')
    return str
}

console.log(exec('harshit kumar bhargav'))      // Bhargav Kumar Harshit

function exec(str){
    str = str.toLowerCase().split(' ');
    str = str.map(item=>item[0].toUpperCase()+item.slice(1)).join(' ')
    let result = ""
    let word = ""
    for(let i=str.length-1;i>=0;i--){
        const char = str[i]
        if(char===' '){
            result += word +' '
            word = ''
        }else{
            word = char + word
        }
    }
    if(word) result += word
    return result
}

console.log(exec('harshit kumar bhargav'))     // Bhargav Kumar Harshit



//Given an array arr[] of integers and a number x, 
// the task is to find the minimum length of subarray with a sum greater than the given value x.




//Input: arr[] = [1, 4, 45, 6, 0, 19], x  =  51
let arr = [1, 4, 45, 6, 0, 19], x = 51;
function findLength(arr, x) {
    let subArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            subArr.push(arr.slice(i, j + 1));
        }
    }
 let newArr = subArr.filter(item => item.reduce((sum, val) => sum + val, 0) > x);
    if (newArr.length === 0) return 0;
    return Math.min(...newArr.map(item => item.length));
}


console.log(findLength(arr, x));




  
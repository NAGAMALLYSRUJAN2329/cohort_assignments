/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let ans=[]
  for (let i=0;i<transactions.length;i++){
    let moveForward=true
    ans.forEach((cat)=>{
      if(cat.category===transactions[i].category){
        cat.totalSpent=cat.totalSpent+transactions[i].price;
        moveForward=false;
      }
    })
    if(moveForward){
      ans.push({'category':transactions[i].category,'totalSpent':transactions[i].price});
    }
  }
  console.log(ans)
  // ans=[{ 'category': 'Food', 'totalSpent': 10 }];
  return ans;
}
calculateTotalSpentByCategory([
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
])
module.exports = calculateTotalSpentByCategory;

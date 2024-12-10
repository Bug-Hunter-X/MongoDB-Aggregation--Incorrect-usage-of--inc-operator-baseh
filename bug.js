```javascript
//Incorrect usage of $inc operator in MongoDB aggregation pipeline
db.collection.aggregate([
  {
    $group: {
      _id: "$field",
      count: { $sum: 1 },
      sum: { $inc: "$value" } //error here
    }
  }
]);
```
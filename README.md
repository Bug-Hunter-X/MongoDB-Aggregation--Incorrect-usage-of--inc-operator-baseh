# MongoDB Aggregation Error: Incorrect $inc operator Usage
This repository demonstrates a common error when using the `$inc` operator in MongoDB aggregation pipelines. The `$inc` operator is designed to increment a numerical field, but using it with a string field will lead to an error.

## Bug
The original code attempts to use `$inc` on a string field, which is invalid in MongoDB's aggregation framework.

## Solution
The solution involves ensuring that the field being incremented is a numerical value. This can be achieved through either data transformation before aggregation or by using a conditional expression within the aggregation pipeline.

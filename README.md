#Use ES6 Style Promises in Node.js

This lesson walks you through a simple example of refactoring functions to use 
promises. This is useful when calling functions that do not return immediately. 
Promises are an alternative to callbacks and provide a `.then` method with 
`reject` and `resolve` functions allowing you to receive the results of the 
function when the function completes and returns data, as well as evaulate the
data and respond appropriately. 
// Understanding asynchronious code
let count = 0;

setTimeout(function() {
  count++
}, 5000);

console.log(count);

// Understanding callbacks
let usersData = [{name: 'Olena', age: 16}, {name: 'Taras', age: 18}];

function extractAges(usersData) {
return usersData.map((user) => user.age)
}

function getTheYoungest(usersAge) {
  return Math.min.apply(null, usersAge) // with resp params return Math.min(...usersAge)
}

console.log(getTheYoungest(extractAges(usersData)));

// The same function but using callback
function extractAgesWithCallback(usersData, callback) {
  return callback(usersData.map((user) => user.age))
}
console.log(extractAgesWithCallback(usersData, getTheYoungest));

// Exercise
// Rewrite using callback for executing in right order
function first(){
  setTimeout( function(){
    console.log('first');
  }, 500 );
}
function second(){
  console.log('second');
}




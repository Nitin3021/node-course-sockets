var moment = require('moment');

// var date = new Date();
// var months = ['Jan', 'Feb']
// console.log(date.getMonth());

// var date = moment();
// date.add(100, 'year').subtract(2, 'months');
// console.log(date.format('MMM Do, YYYY')); //Jun 30th, 2018

//12:53 pm
//6:01 am

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));

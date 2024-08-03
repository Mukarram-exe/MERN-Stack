var readlineSync = require('readline-sync');

var phoneNumber = readlineSync.questionInt('Enter your phone number: ');
console.log(phoneNumber);
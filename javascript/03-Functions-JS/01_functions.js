// function namaste() {
//     return 'Hello world from india';
// }
// namaste();
//  var greetings = namaste();
//  console.log(greetings);
//------------------------------------------------------------>
import readlinesync from 'readline-sync';
function isEven(num) {
    var theNum = readlinesync.question('Enter your number:');
    switch (theNum) {
        case num % 2==0:
            console.log('it is a even number');
            break;
    
        default:
            console.log("it is a odd number");
            break;
    }

}
isEven(50);

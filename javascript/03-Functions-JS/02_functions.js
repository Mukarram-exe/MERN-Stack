import readlineSync from 'readline-sync';

var getUserRole = function (name, role){
    name = readlineSync.question('Enter your name: ');
    role = readlineSync.question('Enter your role: ');

    console.log(`${name} is now ${role}`);
}

getUserRole();

//---------------------------------------------------------------------------->
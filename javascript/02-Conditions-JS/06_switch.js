// Make a program where you take user role and return user priviliges for that role.
// Roles: admin ,sub admin, user, teacher
// var readlinesync = require("readline-sync")
// var role = readlinesync.question("What is your role?")

// if (role == "admin"|| "Admin" ||"ADMIN" ) {
//     console.log("Admin: Get full access");
// } else if (role == "sub admin") {
//     console.log("Sub admin: Gets access to create/delete courses");
// } else if (role == "teacher") {
//     console.log("Teacher: Gets access to create / delete tests");
// } else if (role == "user") {
//     console.log("User: Gets access to only consume");
// } else {
//     console.log("role not defined");
// }
//--------------------------Alternate of if-else statements--------------------------------------------->
var readlinesync = require("readline-sync")
var role = readlinesync.question("What is your role? ")
switch (role) {
    case "admin":
        console.log("Get full access");
        break;
    case "sub admin":
        console.log("Gets access to create/delete courses");
        break;
    case "teacher":
         console.log("Gets access to create / delete tests");
         break;
         case "user":
            console.log("Gets access to only consume");
            break;
    default:
        break;
}
//---------------------------------------------------------------------------->

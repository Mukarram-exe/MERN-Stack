//--------------------------------------------------------->
// Write a function to check wheter a business is profitable or not.
/**
 * COMPANY INVESTED ONE MILLION IN THEIR BRAND AND MARKETING.
 * SOMETIMES DUE TO INCREASE IN THE BUYING PRICE OF THEIR CLOTH COST PRICE INCREASES
 * THIS PROGRAM CALCULATES, WHETHER THE COMPANY IS IN PROFIT OR LOSS ON THE BASIS OF THIER COST PRICE AND SELLING PRICE
 */
 
import readlineSync from "readline-sync";
let situation = function (sellingPrice,costPrice) {
    sellingPrice = readlineSync.questionInt("Enter your selling price: ")
    costPrice = readlineSync.questionInt("Enter your cost price: ")
    if (sellingPrice>costPrice) {
        console.log("You are in a profitable bussiness");
    } else {
        console.log("You are in a loss bussiness");
    }
}
situation();
//----------------------------------------------------------------->
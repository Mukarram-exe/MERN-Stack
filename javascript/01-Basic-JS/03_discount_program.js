//-------------------------------------------------------------------------->
//THIS PROGRAM IS USE TO CALCULATE DISCOUNTING PRICE FOR ANYTHING.                 
// DISCOUNTED PRICE FORMULA = (((LISTING PRICE - SELLING PRICE)/LISTING PRICE)*100)
//-------------------------------------------------------------------------->

let listingPrice = 1050
let sellingprice = 300
let discount = Math.round(((listingPrice - sellingprice) / listingPrice) * 100)

console.log("Discount Percentage:" ,discount + "% OFF" );

//-------------------------------------------------------------------------->
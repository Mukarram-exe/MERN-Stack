// 1
// 2  3
// 4  5  6
// 7  8  9  10
// 11 12 13 14 15
//------------------------------------------>

 for (let i = 1; i<=5; i++){
     if (i<=1) {
        console.log(1);
     } else if (i>1&&i<=2) {
      console.log(2,3);  
     } else if (i>2&&i<=3) {
        console.log(4,5,6);
     } else if (i>3&&i<=4) {
        console.log(7,8,9,10);
     } else if (i>4&&i<=5) {
        console.log(11,12,13,14,15);
     } else {
         console.log(`NO DEFINED`);
     }
    
}
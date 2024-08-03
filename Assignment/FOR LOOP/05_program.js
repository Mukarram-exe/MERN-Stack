// 1  2  3  4  5
// 6  7  8  9
// 10 11 12
// 13 14
// 15
// ---------------------------------------------------------------->
for (let i = 1; i <= 5; i++) {
  if (i <= 1) {
    console.log("1   2   3   4   5");
  } else if (i > 1 && i <= 2) {
    console.log("6   7   8   9");
  } else if (i > 2 && i <= 3) {
    console.log("10  11  12");
  } else if (i > 3 && i <= 4) {
    console.log("13  14");
  } else if (i > 3 && i <= 5) {
    console.log("15");
  } else {
    console.log(`NOT DEFINED`);
  }
}

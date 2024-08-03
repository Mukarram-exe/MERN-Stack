// Defang IPv4 and Validate
// Input 1:  255.64.12.11
//----------------------------------------------------->
// Algorithm :
/**
 * REGULAR EXPRESSION FOR IPV4 IS "/^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}$/;" IN JAVASCRIPT.
 * REGULAR EXPRESSION FOR IPV4 IS "(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])" IN C LANGUAGE.
 * USING IF STATEMENT VALIDATE THE IP ADDRESS.(.test can be used )
 * TO DEFANG JUST REPLACE THE . WITH [.] USING THE .replace.
 */
// function defangANDvalidate(ip) {
//   const IPv4Regex =
//     /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}$/;

//   if (IPv4Regex.test(ip)) {
//     console.log(`It is VALID`);
//   } else {
//     console.log(`It is not VALID`);
//   }

//   let defangedIp = ip.replace(/\./g, `[.]`);
//   return defangedIp;
// }
// console.log(defangANDvalidate(`123.123.123.123`));
//----------------------------------------------------------------------->
//------------DIFFERENT APPROACH------------------------------------------>
let validIP = (ip) => {
  ip = ip.split('.');
  let valid = true;
  for (let i = 0; i<ip.length;i++){
      if (ip[i] > 255 || ip[i] < 0){
          valid = false;
          break;
      }
  }
  valid ? console.log(ip.join('.')) : console.log('Invalid IP');
}

validIP('255.64.12.11');
 
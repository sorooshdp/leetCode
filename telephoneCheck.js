// function telephoneCheck(str) {
//   let regex = /[\s()-]/;
//   let numRegex = /[0-9]/g;
//   let string = str.split(regex);

//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === "") {
//       string.splice(i, 1);
//       i--;
//     }
//   }

//   if (string.length > 4) {
//     return false;
//   } else if (string.length === 4) {
//     if (string[0] === "1") {
//       return string.every(function (item) {
//         return numRegex.test(item);
//       });
//     } else return false;
//   }
//   else if (string.length < 4)
//   {
//     return string.every(function (item) {
//       return numRegex.test(item);
//     });
//   }
// }

// console.log(telephoneCheck("09024316018"));
//1 555 555 5555
//1(555)555-5555
//(555)555-5555
//555-555-5555
//5555555555
//1 (555) 555-5555
//1 555-555-5555
var re =
  /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;

function telephoneCheck(str) {
  return re.test(str);
}

console.log(telephoneCheck(""));

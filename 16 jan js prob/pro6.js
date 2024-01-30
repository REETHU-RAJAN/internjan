/*Write a JavaScript program to create a new string from a given string taking the last 3
characters and added at both the front and back. The string length must be 3 or more, if
not, the original string is returned */
function NewString(ipstring) {
    if (ipstring.length >= 3) {
  let lastlet = ipstring.slice(-3);
  let NewString=lastlet + ipstring + lastlet;
  return NewString;
    }
     else {
     return ipstring;
    }
  }
  let emp1="reethu"
  let exp2="re"

console.log(NewString(emp1));
console.log(NewString(exp2));

  
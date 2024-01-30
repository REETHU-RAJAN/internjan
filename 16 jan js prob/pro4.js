/*Write a JS program to check 2 numbers and return true if one of the number is 100 or if the sum of the two numbers is 100 */
 
function check(num1,num2){
  return num1 ==100 || (num1+num2)==100;
}
console.log(check(50,50));
console.log(check(80,6));
console.log(check(100,90));
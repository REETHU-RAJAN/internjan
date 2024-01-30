
/*Write a JavaScript function that returns a passed string with letters in alphabetical order.
Example string: 'webmaster'
Expected Output: 'abeemrstw'*/ 

  
function sortinp(inpstring){
    let sortstring=inpstring.split('').sort().join('');
    return sortstring
  }
console.log(sortinp("webmaster"));


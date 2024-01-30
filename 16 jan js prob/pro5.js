/*Write a JavaScript program to extract the first half of a string of even length */
function leneven(str){
  if(str.length % 2==0){
    let halfindex= str.length/2;
    let halflen=str.substring(0,halfindex);
    return halflen;
  }
  else{
    return str;
  }

}
console.log(leneven("abceddd"));
console.log(leneven("ababab"));
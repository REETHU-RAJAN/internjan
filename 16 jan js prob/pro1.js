/*Write a JS program to replace every character in a given string with the character following it in the alphabet */
function replaced(str){
  let letters=str.split('');
  let replacedstr=letters.map(ch=>{
    if (/[a-zA-Z]/.test(ch)){
      let nextletcod=ch.charCodeAt(0)+1;
      let nextletter=String.fromCharCode(nextletcod);
      return nextletter;

    }
    else{
      return ch
    }


  }).join('');
  return replacedstr;
}
console.log(replaced("Reethu!!!"));
  
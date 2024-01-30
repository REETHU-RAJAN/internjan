/*
Write a JS program to get the extension of a filename. (Give the input as a string) */
function getext(inpstring) {
  let dotinp=inpstring.lastIndexOf('.')
  let ext=inpstring.substring(dotinp + 1)
  return ext;
   
  }
  console.log(getext("reethu@gmail.com"));

  
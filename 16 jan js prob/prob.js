/*Write a JavaScript program to compare two objects to determine if the first one contains
the same properties as the second one (which may also have additional properties). For
example, objA and objB are equal (but not equal to objC).
const objA = { a: 1, b: 1, c: 1 };
const objB = { a: 1, b: 1, c: 1 };
const objC = { a: 1, b: 1, d: 1 }; */

  
function camobj(obj1,obj2){
  let objkey1=Object.keys(obj1)
  let objkey2=Object.keys(obj2)
  
if(objkey1.length !== objkey2.length){
  return false
}
for (let key of objkey1) {
  if (!objkey2.includes(key)) {
    return false;
  }
}
for (let key of objkey1) {
  if (obj1[key] !== obj2[key]) {
    return false;
  }
}
return true;
}
console.log(camobj({ a: 1, b: 1, c: 1 },{ a: 1, b: 1, c: 1 }));
console.log(camobj({ a: 1, b: 1, c: 1 },{ a: 1, b: 1, d: 1 }));
console.log(camobj({ a: 1, c: 1 },{ a: 1, b: 1, c: 1 }));
console.log(camobj({ a: 1, b: 1, c: 4},{ a: 1, b: 1, c: 1 }));




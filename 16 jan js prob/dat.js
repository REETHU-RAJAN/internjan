// Write a JavaScript program to get the current date.
function getCurrentDate() {
    
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1; 
    let day = currentDate.getDate();
    let todayDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
  
    return todayDate;
  }
  
 
  let currentDate = getCurrentDate();
  console.log(currentDate);
  
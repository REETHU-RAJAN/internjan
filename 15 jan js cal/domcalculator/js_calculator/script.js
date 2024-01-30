function displayNumber(num){
    inputBox.value+=num
}
function clearBox(){
    inputBox.value=""
}
function evalExpression(){
    // let x=document.getElementById("inputBox").value
    let expr=inputBox.value
    let res=eval(expr)
    inputBox.value=res
    // document.getElementById("inputBox").value=y
}
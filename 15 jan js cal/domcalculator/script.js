function addition(){
    let n1=document.querySelector("#id_num1").value
    let n2=document.querySelector("#id_num2").value
    let result=Number(n1)+Number(n2)
    console.log(result);
    document.querySelector("#result").innerHTML= `addition result=${result}`

}
function subtraction(){
    let n1=document.querySelector("#id_num1").value
    let n2=document.querySelector("#id_num2").value
    let result=Number(n1)-Number(n2)
    console.log(result);
    document.querySelector("#result").innerHTML=result

}
function multiplication(){
    let n1=document.querySelector("#id_num1").value
    let n2=document.querySelector("#id_num2").value
    let result=Number(n1)*Number(n2)
    console.log(result);
    document.querySelector("#result").innerHTML=result

}
function division(){
    let n1=document.querySelector("#id_num1").value
    let n2=document.querySelector("#id_num2").value
    let result=Number(n1)/Number(n2)
    console.log(result);
    document.querySelector("#result").innerHTML=result

}
// var name =reethu
// var place =thrissur
// //hai all iam reethu from thrissur
// console.log(`hai all am ${name} from ${place}`)
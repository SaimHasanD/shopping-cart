document.getElementById("plusButtonOne").addEventListener("click", function(){
    // updatePlusButton("firstInput");
 })
document.getElementById("plusButtonTwo").addEventListener("click", function(){
    // updatePlusButton("secondInput");
})
document.getElementById("minusButtonOne").addEventListener("click", function(){
    // updateMinusButton("firstInput");
})
document.getElementById("minusButtonTwo").addEventListener("click", function(){
    const inputNumber = document.getElementById("secondInput");
    const number = parseFloat(inputNumber.value);
    const totalNumber = number - 1;
    inputNumber.value = totalNumber;
    const totalPrice = totalNumber * 59;
    document.getElementById('casePrice').innerHTML = totalPrice ;
    // updateMinusButton("secondInput");
})

 function updatePlusButton(){
    const inputNumber = document.getElementById("secondInput");
    const number = parseFloat(inputNumber.value);
    const totalNumber = number + 1;
    inputNumber.value = totalNumber;
    const totalPrice = totalNumber * 59;
    document.getElementById('casePrice').innerText = totalPrice ;
 }

 function updateMinusButton(){
    // const inputNumber = document.getElementById("secondInput");
    // const number = parseFloat(inputNumber.value);
    // const totalNumber = number - 1;
    // inputNumber.value = totalNumber;
    // const totalPrice = totalNumber * 59;
    // document.getElementById('casePrice').innerHTML = totalPrice ;

 }
 
    // const inputNumber = document.getElementById("firstInput").value;
    // const number = parseFloat(inputNumber);
    // const totalNumber = number + 1;
    // document.getElementById("firstInput").value = totalNumber;


    //from app.js
    // // case plus
// function handleProductChanges(){
//     const inputNumber = document.getElementById("caseInput");
//     const number = parseFloat(inputNumber.value);
//     const totalNumber = number + 1;
//     inputNumber.value = totalNumber;
//     const totalPrice = totalNumber * 59;
//     document.getElementById("casePrice").innerText = '$'+totalPrice;
// }

// // case minus
// function handleProductChange(){
//     const inputNumber = document.getElementById("caseInput");
//     const number = parseFloat(inputNumber.value);
//     const totalNumber = number - 1;
//     inputNumber.value = totalNumber;
//     const totalPrice = totalNumber * 59;
//     document.getElementById("casePrice").innerText = '$'+totalPrice;
// }

// document.getElementById("casePlus").addEventListener("click", function () {
//     const inputNumber = document.getElementById("caseInput");
//     const number = parseFloat(inputNumber.value);
//     const totalNumber = number + 1;
//     inputNumber.value = totalNumber;
//     const totalPrice = totalNumber * 59;
//     document.getElementById("casePrice").innerText = '$'+totalPrice;
// });

// document.getElementById("caseMinus").addEventListener("click", function () {
//     const inputNumber = document.getElementById("caseInput");
//     const number = parseFloat(inputNumber.value);
//     const totalNumber = number - 1;
//     inputNumber.value = totalNumber;
//     const totalPrice = totalNumber * 59;
//     document.getElementById("casePrice").innerText = '$'+totalPrice;
// });


// // phone input button
// function handleProductChanges(isIncrease){
//     const inputNumber = document.getElementById("phoneInput");
//     const number = parseFloat(inputNumber.value);
//     let totalNumber = number;
//     if (isIncrease == true) {
//         totalNumber = number + 1;
//     }
//     if (isIncrease == false && number>0) {
//         totalNumber = number - 1;
//     }
//     inputNumber.value = totalNumber;
//     const totalPrice = totalNumber * 1200;
//     document.getElementById("phonePrice").innerText = '$'+totalPrice;
// }
// // case input button
// function handleProductChange(isIncrease){
//     const inputNumber = document.getElementById("caseInput");
//     const number = parseFloat(inputNumber.value);
//     let totalNumber = number;
//     if (isIncrease == true) {
//         totalNumber = number + 1;
//     }
//     if (isIncrease == false && number>0) {
//         totalNumber = number - 1;
//     }
//     inputNumber.value = totalNumber;
//     const totalPrice = totalNumber * 59;
//     document.getElementById("casePrice").innerText = '$'+totalPrice;
// }
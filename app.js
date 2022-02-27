document.getElementById("casePlus").addEventListener("click", function () {
    handleProductChanges();
});

document.getElementById("caseMinus").addEventListener("click", function () {
    handleProductChange();
});

function handleProductChanges(){
    const inputNumber = document.getElementById("caseInput");
    const number = parseFloat(inputNumber.value);
    const totalNumber = number + 1;
    inputNumber.value = totalNumber;
    const totalPrice = totalNumber * 59;
    document.getElementById("casePrice").innerText = '$'+totalPrice;
}

function handleProductChange(){
    const inputNumber = document.getElementById("caseInput");
    const number = parseFloat(inputNumber.value);
    const totalNumber = number - 1;
    inputNumber.value = totalNumber;
    const totalPrice = totalNumber * 59;
    document.getElementById("casePrice").innerText = '$'+totalPrice;
}

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

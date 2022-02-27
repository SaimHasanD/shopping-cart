document.getElementById("phonePlus").addEventListener("click", function(){
    handleProductChanges(true);
})

document.getElementById("phoneMinus").addEventListener("click", function(){
    handleProductChanges(false);
})

document.getElementById("casePlus").addEventListener("click", function () {
    handleProductChange(true);
});

document.getElementById("caseMinus").addEventListener("click", function () {
    handleProductChange(false);
});

// phone input button
function handleProductChanges(isIncrease){
    const inputNumber = document.getElementById("phoneInput");
    const number = parseFloat(inputNumber.value);
    let totalNumber = number;
    // const totalNumber = number - 1;
    if (isIncrease == true) {
        totalNumber = number + 1;
    }
    if (isIncrease == false && number>0) {
        totalNumber = number - 1;
    }
    inputNumber.value = totalNumber;
    const totalPrice = totalNumber * 1200;
    document.getElementById("phonePrice").innerText = '$'+totalPrice;
}

// case input button
function handleProductChange(isIncrease){
    const inputNumber = document.getElementById("caseInput");
    const number = parseFloat(inputNumber.value);
    let totalNumber = number;
    // const totalNumber = number - 1;
    if (isIncrease == true) {
        totalNumber = number + 1;
    }
    if (isIncrease == false && number>0) {
        totalNumber = number - 1;
    }
    inputNumber.value = totalNumber;
    const totalPrice = totalNumber * 59;
    document.getElementById("casePrice").innerText = '$'+totalPrice;
}
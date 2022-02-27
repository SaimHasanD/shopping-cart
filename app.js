// phone input button
function handleProductChanges(isIncrease){
    const inputNumber = document.getElementById("phoneInput");
    const number = parseFloat(inputNumber.value);
    let totalNumber = number;
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
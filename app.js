document.getElementById("casePlus").addEventListener("click", function () {
    const inputNumber = document.getElementById("caseInput");
    const number = parseFloat(inputNumber.value);
    const totalNumber = number + 1;
    inputNumber.value = totalNumber;
    const totalPrice = totalNumber * 59;
    document.getElementById("casePrice").innerText = '$'+totalPrice;
})

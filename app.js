function handleProductChange(product, isIncrease) {
    const inputNumber = document.getElementById(product + "Input");
    const number = parseFloat(inputNumber.value);
    let totalNumber = number;
    if (isIncrease == true) {
        totalNumber = number + 1;
    }
    if (isIncrease == false && number > 0) {
        totalNumber = number - 1;
    }
    inputNumber.value = totalNumber;
    let totalPrice = totalNumber;
    if (product == 'phone') {
        totalPrice = totalNumber * 1200;
    }
    if (product == 'case') {
        totalPrice = totalNumber * 59;
    }
    document.getElementById(product + "Price").innerText = '$' + totalPrice;
    subTotal();
}

function subTotal() {
    const phoneInput = document.getElementById('phoneInput');
    const totalPhone = parseInt(phoneInput.value);
    
    const caseInput = document.getElementById('caseInput');
    const totalCase = parseInt(caseInput.value);

    const subCost = totalPhone * 1200 + totalCase * 59;
    document.getElementById('subCost').innerText = '$' + subCost;
}
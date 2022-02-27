// phone input , case input, plus button, minus button
function handleProductChange(product, isIncrease) {
    const inputNumber = document.getElementById(product + "Input");
    const number = parseFloat(inputNumber.value);
    // const number = getInputValue(product);
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
    document.getElementById(product + 'Price').innerText = '$' + totalPrice;
    // sub total cost add
    subTotal();
}

// sub total
function subTotal() {
    const totalPhone = getInputValue('phone');
    const totalCase = getInputValue('case');

    const subCost = totalPhone * 1200 + totalCase * 59;
    document.getElementById('subCost').innerText = '$' + subCost;
}

// Product Input Value
function getInputValue(product) {
    const productInput = document.getElementById(product + 'Input');
    const totalProduct = parseInt(productInput.value);
    return totalProduct;
}
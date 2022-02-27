// phone input , case input, plus button, minus button
function handleProductChange(product, isIncrease) {
    const productInput = document.getElementById(product + 'Input');
    const totalProduct = getInputValue(product);
    let totalNumber = totalProduct;
    if (isIncrease == true) {
        totalNumber = totalProduct + 1;
    }
    if (isIncrease == false && totalProduct > 0) {
        totalNumber = totalProduct - 1;
    }
    productInput.value = totalNumber;
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

    const cost = totalPhone * 1200 + totalCase * 59;
    document.getElementById('subCost').innerText = '$' + cost;

    const tax = cost * 0.1;
    const totalTax = Math.round(tax);
    document.getElementById('taxAmount').innerText = '$' + totalTax;

    const allCost = cost + tax ;
    const totalCost = Math.round(allCost);
    document.getElementById('totalCost').innerText = '$' + totalCost;
}

// Product Input Value
function getInputValue(product) {
    const productInput = document.getElementById(product + 'Input');
    const totalProduct = parseInt(productInput.value);
    return totalProduct;
}
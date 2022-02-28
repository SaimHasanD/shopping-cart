function handleProductChange(product, isIncrease) {
    let productInput = document.getElementById(product + 'Input');
    let productNumber = parseInt(productInput.value);
    let totalProduct = productNumber;
    if (isIncrease == true) {
        totalProduct = productNumber + 1;
    }
    if (isIncrease == false && productNumber > 0) {
        totalProduct = productNumber - 1;
    }
    productInput.value = totalProduct;
    totalPrice = totalProduct * 59;
    document.getElementById(product + 'Price').innerText = '$' + totalPrice;

    calculateTotal();
}

// calculate total
function calculateTotal() {
    let phoneNumber =getProductValue('phone');
    let caseNumber = getProductValue('case');

    let subCost = phoneNumber * 1200 + caseNumber * 59;
    document.getElementById('subCost').innerText = '$' + subCost;

    let tax = Math.round(subCost * 0.1);
    document.getElementById('taxAmount').innerText = '$' + tax;

    let totalCost = subCost + tax;
    document.getElementById('totalCost').innerText = '$' + totalCost;
}

function getProductValue(product) {
    let productInput = document.getElementById(product + 'Input');
    let productNumber = parseInt(productInput.value);
    return productNumber;
}
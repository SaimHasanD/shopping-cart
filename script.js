document.getElementById("plusButtonOne").addEventListener("click", function(){
    updatePlusButton("firstInput");
 })
document.getElementById("plusButtonTwo").addEventListener("click", function(){
    updatePlusButton("secondInput");
})
document.getElementById("minusButtonOne").addEventListener("click", function(){
    updateMinusButton("firstInput");
})
document.getElementById("minusButtonTwo").addEventListener("click", function(){
    updateMinusButton("secondInput");
})

 function updatePlusButton(input){
    const inputNumber = document.getElementById(input).value;
    const number = parseFloat(inputNumber);
    const totalNumber = number + 1;
    document.getElementById(input).value = totalNumber;
 }

 function updateMinusButton(input){
    const inputNumber = document.getElementById(input).value;
    const number = parseFloat(inputNumber);
    const totalNumber = number - 1;
    document.getElementById(input).value = totalNumber;
 }
document.getElementById("plusButtonOne").addEventListener("click", function(){
    updatePlusButton("firstInput");
 })
document.getElementById("plusButtonTwo").addEventListener("click", function(){
    updatePlusButton("secondInput");
})

 function updatePlusButton(input){
    const inputNumber = document.getElementById(input).value;
    const number = parseFloat(inputNumber);
    const totalNumber = number + 1;
    document.getElementById(input).value = totalNumber;
 }
function getInputValue(inputId){
    const inputField = document.getElementById(inputId).value;
    const input = parseFloat(inputField); 
    return input;
}
    const incomeError = document.getElementById('incomeError');
    const foodError = document.getElementById('foodError');
    const rentError = document.getElementById('rentError');
    const clothError = document.getElementById('clothError');

function calculate(){

    const income = getInputValue('income');
    const food = getInputValue('food');
    const rent = getInputValue('rent');
    const clothe = getInputValue('clothes');

    const sumExpense = food + rent + clothe;
    const balance = income - sumExpense;
    if(income < 0 || isNaN(income)){
       incomeError.style.display = 'block';
       foodError.style.display = 'none';
       rentError.style.display = 'none';
       clothError.style.display = 'none';
    }else if(food < 0 || isNaN(food)){
        foodError.style.display = 'block';
        incomeError.style.display = 'none';
        rentError.style.display = 'none';
       clothError.style.display = 'none';
    }else if(rent < 0 || isNaN(rent)){
        rentError.style.display = 'block';
        foodError.style.display = 'none';
        incomeError.style.display = 'none';
        clothError.style.display = 'none';
    }else if(clothe < 0 || isNaN(clothe)){
        clothError.style.display = 'block';
        rentError.style.display = 'none';
        foodError.style.display = 'none';
        incomeError.style.display = 'none';
    }
    else{
        document.getElementById('total-expense').innerText = sumExpense;
        document.getElementById('balance').innerText = balance;
        clothError.style.display = 'none';
        rentError.style.display = 'none';
        foodError.style.display = 'none';
        incomeError.style.display = 'none';
    }



}
function savingsAmount(){
    const balanceField = document.getElementById('balance').innerText;
    const balance = parseFloat(balanceField);

    const income = getInputValue('income');
    const savePercent =  getInputValue('savings');

    const savingsAmount = income / 100 * savePercent;
    const remainingBalance = balance - savingsAmount;

    if(balance < savingsAmount){
        alert('warning');
    }else{
        document.getElementById('savings-amount').innerText = savingsAmount;
        document.getElementById('remaining-balance').innerText = remainingBalance;
    }



}




document.getElementById('calculate-button').addEventListener('click', function(){
    calculate();
})

document.getElementById('save').addEventListener('click', function(){
    savingsAmount();
})
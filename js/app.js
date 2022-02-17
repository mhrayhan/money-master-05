function getInputValue(inputId){
    const inputField = document.getElementById(inputId).value;
    const input = parseFloat(inputField);
    return input;
}


function calculate(){
    const income = getInputValue('income');
    const food = getInputValue('food');
    const rent = getInputValue('rent');
    const clothe = getInputValue('clothes');

    const sumExpense = food + rent + clothe;
    const balance = income - sumExpense;

    document.getElementById('total-expense').innerText = sumExpense;
    document.getElementById('balance').innerText = balance;

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
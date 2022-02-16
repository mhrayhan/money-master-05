document.getElementById('calculate-button').addEventListener('click', function(){
    const incomeInput = document.getElementById('income').value;
    const income = parseFloat(incomeInput);
    const foodInput = document.getElementById('food').value;
    const food = parseFloat(foodInput);
    const rentInput = document.getElementById('rent').value;
    const rent = parseFloat(rentInput);
    const clothesInput = document.getElementById('clothes').value;
    const clothe = parseFloat(clothesInput);

    const sumExpense = food + rent + clothe;
    console.log(sumExpense);


    document.getElementById('total-expense').innerText = sumExpense;

    document.getElementById('balance').innerText = income - sumExpense;



})
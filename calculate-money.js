

function getFieldValue(expId) {
    const expField = document.getElementById(expId);
    const fieldString = parseFloat(expField.value);
    if (!isNaN(fieldString)) {
        const value = fieldString;
        return value;
    }else{
        return fieldString;
    }
}


function getBalance(balanceId) {
    const balance =document.getElementById(balanceId);
    // const balanceValue = parseFloat(balance.innerText);
    return balance;
}

document.getElementById('calculate').addEventListener('click',()=>{
    const incomeValue = getFieldValue('income-field');
    const foodValue = getFieldValue('food-field');
    const rentValue = getFieldValue('rent-field');
    const clothesValue = getFieldValue('clothes-field');
    const expField = getBalance('total-exprense');
    const balance = getBalance('total-balance');

    if (isNaN(incomeValue) | isNaN(foodValue) | isNaN(rentValue) | isNaN(clothesValue)) {
        alert('Please enter number');
    }else{
        const totalExp = foodValue + rentValue + clothesValue;
        if (incomeValue > totalExp) {
            const totalBalance = incomeValue - totalExp;
            if (!isNaN(totalBalance)) {
                expField.innerText = totalExp;
                balance.innerText = totalBalance
            }
        }else{
            alert(`You have ${totalExp} balance is not availabe`);
        }
    }
})


document.getElementById('save-btn').addEventListener('click',()=>{
    const incomeValue = getFieldValue('income-field');
    const saveMoney = getFieldValue('save-money');
    const balance = getBalance('total-balance');
    const saveAmount = getBalance('save-amount');
    const remainingBalance= getBalance('remaining-balance');
    const balanceValue = balance.innerText;
    const saveMoneyValue = (incomeValue * saveMoney) / 100;
    if (!isNaN(saveMoneyValue)) {
        saveAmount.innerText = saveMoneyValue;
        remainingBalance.innerText = balanceValue - saveMoneyValue;
    }
})
document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositFieldString = depositField.value;
    const newDepositAmount = parseFloat(newDepositFieldString);

    depositField.value = ''; 


    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const newDepositTotal = previousDepositTotal+newDepositAmount;
    depositTotalElement.innerText= newDepositTotal;

    
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousBalanceTotalAmount+newDepositTotal;
    balanceTotalElement.innerText = newBalanceTotal;

})
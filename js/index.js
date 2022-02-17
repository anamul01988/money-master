
//functionality
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  console.log(amountValue)
  if(isNaN(amountValue)){
    document.getElementById('alert').innerHTML ="pls reload this page and send number";
    document.getElementById('alert').style.background="lightBlue";
    document.getElementById('alert').style.color="black";
  }
  else if(amountValue < 0){
    alert("negative value is not allowed")
    document.getElementById('alert').innerHTML ="Negative value is not allowed";
    document.getElementById('alert').style.display="none";

  }
  else{
    return amountValue;
  }
}


function getCurrentBalance() {
  const balanceTotal = document.getElementById('total-balance');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  return previousBalanceTotal;
}
function updateBalance(totalIncome,amount) {
  const balanceTotal = document.getElementById('total-balance');
  if(totalIncome>=amount){
    const balance = totalIncome - amount;
    // const previousBalanceTotal = getCurrentBalance();
    // balanceTotal.innerText = previousBalanceTotal  + balance;
    balanceTotal.innerText =  balance;
  }
  else if(totalIncome<amount){
    // alert("you don't have sufficient Balance");
    document.getElementById('alert').innerHTML ="you don't have sufficient ballance";
    document.getElementById('alert').style.background="lightBlue";
    document.getElementById('alert').style.color="black";
  }
}

document.getElementById('calculate').addEventListener('click', function () {

  const food = getInputValue("food-input");
  const rent = getInputValue("rent-input");
  const clothes = getInputValue("clothes-input");

    const totalSum = food + rent + clothes;
    const totalExpenses = document.getElementById('total-expenses');
    const prevExpensesText = totalExpenses.innerText;
    const prevExpensesValue = parseFloat(prevExpensesText);
    // const newExpensesTotal = prevExpensesValue + totalSum;
    const newExpensesTotal =  totalSum;
    totalExpenses.innerText = newExpensesTotal;


    const totalIncome = getInputValue("income");
    console.log(totalIncome)
    console.log(newExpensesTotal);
    updateBalance(totalIncome,newExpensesTotal);

});

document.getElementById("save").addEventListener("click", function () {

  let totalIncomeValue = document.getElementById("income").value;
  const saveValue = getInputValue('save-input'); ;
  console.log(saveValue);
  const mulPercentage =  saveValue * totalIncomeValue;
  const percentage = mulPercentage/100;
  console.log("Percentage", percentage);
  const currentBalance = getCurrentBalance();

  if(percentage>currentBalance){
    console.log("impossible")
    alert("Impossible to saving amount due to lower Balance")
  }
  else{
    const saveAmount = document.getElementById('save-amount');
    const newSaveTotal=  saveAmount.innerText = percentage;
    const remainingBalance = currentBalance - newSaveTotal;
    console.log(remainingBalance);
  
    const remainingTotalBalance = document.getElementById('remain-balance');
      remainingTotalBalance.innerText = remainingBalance;
  }
});


/*
document.getElementById("calculate").addEventListener("click", function () {
  const food = document.getElementById("food-input");
  const foodText = food.value;
  const foodValue = parseFloat(foodText);
  console.log(foodValue);

  const rent = document.getElementById("rent-input");
  const rentText = rent.value;
  const rentValue = parseFloat(rentText);
  console.log(rentValue);

  const clothes = document.getElementById("clothes-input");
  const clothesText = clothes.value;
  const clothesValue = parseFloat(clothesText);
  console.log(clothesValue);

  const totalSum = foodValue + rentValue + clothesValue;
  console.log(totalSum);

  const totalExpenses = document.getElementById("total-expenses");
  const prevExpensesText = totalExpenses.innerText;
  const prevExpensesValue = parseFloat(prevExpensesText);
  const newExpensesTotal = prevExpensesValue + totalSum;
  totalExpenses.innerText = newExpensesTotal;



  let totalIncome = document.getElementById("income");
  let totalIncomeText = totalIncome.value;
  let totalIncomeValue = parseFloat(totalIncomeText);
  console.log("total income value: ", totalIncomeValue);

  const totalBalance = document.getElementById("total-balance");
  const prevBalanceText = totalBalance.innerText;
  const prevBalanceValue = parseFloat(prevBalanceText);
  const newBalanceValue = prevBalanceValue + newExpensesTotal;
  const newBalanceTotalValue = totalIncomeValue - newBalanceValue;
  console.log("newBalanceTotalValue", newBalanceTotalValue);
  totalBalance.innerText = newBalanceTotalValue;
});

document.getElementById("save").addEventListener("click", function () {
  let totalIncome = document.getElementById("income");
  let totalIncomeText = totalIncome.value;
  let totalIncomeValue = parseFloat(totalIncomeText);
  console.log("total income value: ", totalIncomeValue);


  const save = document.getElementById("save-input");
  const saveText = save.value;
  const saveValue = parseFloat(saveText);
  console.log(saveValue);
  const percentage = ( saveValue * totalIncomeValue)/100;
  console.log("Percentage", percentage);

   const saveAmount = document.getElementById('save-amount');
  const preSaveText = saveAmount.innerText;
  const preSaveValue = parseFloat(preSaveText);
  const newSaveTotal = preSaveValue + percentage;
  saveAmount.innerText = newSaveTotal;

}); */



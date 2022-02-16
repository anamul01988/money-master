// let  totalIncome = document.getElementById('income');
// let totalIncomeText = totalIncome.value;
// let totalIncomeValue = parseFloat(totalIncomeText);
// console.log("total income value: ",totalIncomeValue);
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
  //saving balance
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

});

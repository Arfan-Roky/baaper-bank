// handle deposit button
document.getElementById('deposit-btn').addEventListener('click', function () {
  // get the deposit input and amount
  const depositInput = document.getElementById('deposit-input');
  const newDepositAmountText = depositInput.value; //new text amount
  const newDepositAmount = parseFloat(newDepositAmountText); //convert to new number

  // update deposit
  const depositCurrent = document.getElementById('deposit-total');
  const previousDepositAmountText = depositCurrent.innerText; //prev text amount
  const previousDepositAmount = parseFloat(previousDepositAmountText); // convet to prev number

  const newDepositTotal = previousDepositAmount + newDepositAmount; // addition prev to new
  depositCurrent.innerText = newDepositTotal; // assign to inside of current

  // update account blance
  const blanceTotal = document.getElementById('blance-total');
  const blanceTotalText = blanceTotal.innerText;
  const preiousBlanceTotalText = parseFloat(blanceTotalText);
  const newBlanceTotal = preiousBlanceTotalText + newDepositAmount;
  blanceTotal.innerText = newBlanceTotal;

  // clear the depositInput
  depositInput.value = '';
});

// get the withdraw input and amount
document.getElementById('withdraw-btn').addEventListener('click', function () {
  const withdrawInput = document.getElementById('withdraw-input');
  const withdrawAmoutText = withdrawInput.value;
  const newWithdrawAmout = parseFloat(withdrawAmoutText);

  const withdrawCurrent = document.getElementById('withdraw-total');
  const previousWithdrawAmountText = withdrawCurrent.innerText;
  const previousWithdrawAmount = parseFloat(previousWithdrawAmountText);

  const newWithdrawTotal = newWithdrawAmout + previousWithdrawAmount;

  withdrawCurrent.innerText = newWithdrawTotal;

  // update account blance
  const blanceTotal = document.getElementById('blance-total');
  const blanceTotalText = blanceTotal.innerText;
  const preiousBlanceTotal= parseFloat(blanceTotalText);
  const newBlanceTotal = preiousBlanceTotal - newWithdrawAmout;
  blanceTotal.innerText = newBlanceTotal;

  //   clear withdraw input
  withdrawInput.value = '';
});

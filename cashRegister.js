function checkCashRegister(price, cash, cid) {
  let returnValue = { status: "", change: [] };
  let totalCash = 0;
  let sumResult = 0;
  let resultFiltered = [];
  let chnage = cash - price;
  const constChange = chnage;
  let arrCurrency = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01],
  ];

  for (let i = 0; i < cid.length; i++) {
    totalCash += cid[i][1];
  }

  cid.reverse();
  var result = [...arrCurrency];

  for (let i = 0; i < arrCurrency.length; i++) {
    let returnMoney = 0;
    let bill = cid[i][1] / arrCurrency[i][1];
    bill.toFixed(2);
    while (chnage.toFixed(2) >= arrCurrency[i][1] && bill >= 1) {
      chnage -= arrCurrency[i][1];
      returnMoney += arrCurrency[i][1];
      bill--;
    }
    if (returnMoney > 0) {
      if (returnMoney - Math.floor(returnMoney) !== 0) {
        result[i][1] = returnMoney.toFixed(2);
        result[i][1] = parseFloat(result[i][1]);
      } else {
        result[i][1] = returnMoney;
      }
    } else {
      result[i][1] = returnMoney;
    }
  }

  for (let i = 0; i < cid.length; i++) {
    sumResult += result[i][1];
  }
  sumResult = sumResult.toFixed(2);

  if (totalCash < constChange || sumResult < constChange) {
    returnValue.status = "INSUFFICIENT_FUNDS";
  } else if (totalCash == constChange) {
    returnValue.status = "CLOSED";
    returnValue.change = cid.reverse();
  } else {
    for (let a = 0; a < result.length; a++) {
      if (result[a][1] !== 0) {
        resultFiltered.push(result[a]);
      }
    }
    returnValue.status = "OPEN";
    returnValue.change = resultFiltered;
  }
  return returnValue;
}

console.log(
  checkCashRegister(100, 500, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

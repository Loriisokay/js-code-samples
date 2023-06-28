/** 
 * TODO:
 * Design a cash register drawer function checkCashRegister() that accepts 
 * purchase price as the first argument (price), 
 * payment as the second argument (cash), 
 * and cash-in-drawer (cid) as the third argument.
 * cid is a 2D array listing available currency.
 * The checkCashRegister() function should always return an object with a status key and a change key.
 * Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, 
 * or if you cannot return the exact change.
 * Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change 
 * if it is equal to the change due.
 * Otherwise, return {status: "OPEN", change: [...]}, 
 * with the change due in coins and bills, sorted in highest to lowest order, 
 * as the value of the change key. 
*/

function checkCashRegister(price, cash, cid) {

    let money = [["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01]];

    let changeSum = cash - price;
    let change = [];
    let status = "";
    let moneyInDrawer = 0;
    let reversedCid = [...cid].reverse();

    reversedCid.forEach((unit) => {
        moneyInDrawer += unit[1];
    })

    if (moneyInDrawer < changeSum) {
        status = "INSUFFICIENT_FUNDS";
    }

    if (changeSum == moneyInDrawer) {
        status = "CLOSED";
        change = [...cid]
    };

    if (moneyInDrawer > changeSum) {
        for (let i = 0; i < reversedCid.length; i++) {

            let count = 0;

            while (reversedCid[i][1] > 0 && changeSum >= money[i][1]) {
                count += money[i][1];
                reversedCid[i][1] -= money[i][1];
                changeSum -= money[i][1];
                changeSum = Math.round(changeSum * 100) / 100;
            }

            if (count > 0) {
                change.push([reversedCid[i][0], count]);
                status = "OPEN";
            }

        }

        if (changeSum > 0) {
            status = "INSUFFICIENT_FUNDS";
            change = [];
        } else {
            status = "OPEN";
        }

    }

    return { status, change };

}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
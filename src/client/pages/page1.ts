/* page1.ts */
import $           = require('jquery');
import Accounting  = require('accounting');
import { BankAccount } from '../domain/BankAccount';


let account = new BankAccount(100, 'John Doe');
let balance = account.getBalance();
let name    = account.getName();

function displayName() {
    $('#account_name').text(name);
}

function displayBalance(): Promise<null> {
    return new Promise(async (resolve, reject) => {
        setTimeout(() => {
            const formattedBalance = Accounting.formatMoney(balance);
            $('#account_balance').text(formattedBalance);
            resolve();
        }, 0);
    });

}

export async function displayAccount () {
    displayName();
    await displayBalance();
}

$(async () => {
    await displayAccount();
    let a = 1 + 2;
});

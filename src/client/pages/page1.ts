/* page1.ts */

import accounting from 'accounting';

import { BankAccount } from '../domain/BankAccount';
import { documentReady } from '../domain/documentReady';

documentReady(async () => {
    let account = new BankAccount(100, 'John Doe');
    await displayAccount(account);
    let a = 1 + 2;
});

export async function displayAccount(account: BankAccount) {
    displayName(account);
    await displayBalance(account);
}

function displayName(account: BankAccount) {
    let name = account.getName();
    const accountNameElement = document.getElementById('account_name');

    if(accountNameElement) {
        accountNameElement.textContent = name;
    }
}

function displayBalance(account: BankAccount): Promise<null> {
    return new Promise(async (resolve, reject) => {
        let balance = account.getBalance();

        setTimeout(() => {
                const formattedBalance = accounting.formatMoney(balance);
                const accountBalanceElement = document.getElementById('account_balance');

                if(accountBalanceElement) {
                    accountBalanceElement.innerText = formattedBalance;
                }

                resolve(null);
            }, 0);
    });
}





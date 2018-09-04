/* page2.ts */
import $ = require('jquery');

import { BankAccount } from '../domain/BankAccount';

let account = new BankAccount(100, 'John Doe');
let balance = account.getBalance();
let name    = account.getName();

// console.log(balance);

function asyncReady(): Promise<null> {
    return new Promise(async (resolve, reject) => {
        setTimeout(() => {
            console.log('ready!');
            resolve();
        }, 0);
    });
}

export function dummyFunction() {
    let a = 1 + 1;

}

$(async () => {
    await asyncReady();
    console.log(process.env);
});
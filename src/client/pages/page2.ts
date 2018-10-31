/* page2.ts */
import { BankAccount } from '../domain/BankAccount';
import { documentReady } from '../domain/documentReady';

let account = new BankAccount(100, 'John Doe');
let balance = account.getBalance();
let name    = account.getName();

console.log('name    = ' + name);
console.log('balance = ' + balance);

function asyncReady(): Promise<null> {
    return new Promise(async (resolve, reject) => {
        setTimeout(() => {
            console.log('page2 ready!');
            resolve();
        });
    });
}

export function dummyFunction() {
    let a = 1 + 1;
}

documentReady(async () => {
    await asyncReady();
    console.log('#asyncReady complete...');
});
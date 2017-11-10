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

function displayBalance() {
    const formattedBalance = Accounting.formatMoney(balance);
    $('#account_balance').text(formattedBalance);
}

export function displayAccount() {
    displayName();
    displayBalance();
}

$(() => {
    displayAccount();
});

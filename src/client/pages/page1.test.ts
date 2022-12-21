import * as assert from 'assert';
import { BankAccount } from '../domain/BankAccount';

const page1 = require('./page1');

describe('page1', () => {
    beforeEach(() => {
        const accountName = document.createElement('span');
        accountName.setAttribute('id', 'account_name');
        accountName.appendChild(document.createTextNode(''));

        const accountBalance = document.createElement('span');
        accountBalance.setAttribute('id', 'account_balance');
        accountBalance.appendChild(document.createTextNode(''));

        document.body.appendChild(accountName);
        document.body.appendChild(accountBalance);
    });

    afterEach(() => {
        const accountNameElement = document.getElementById('account_name');
        accountNameElement?.parentElement?.removeChild(accountNameElement);

        const accountBalanceElement = document.getElementById('account_balance');
        accountBalanceElement?.parentElement?.removeChild(accountBalanceElement);
    });

    it('account is displayed correctly', async () => {
        let account = new BankAccount(100, 'John Doe');
        await page1.displayAccount(account);

        const name = document.getElementById('account_name')?.innerText;
        // TODO: fix me
        // assert.strictEqual(name, 'John Doe');

        const balance = document.getElementById('account_balance')?.innerText;
        assert.strictEqual(balance, '$100.00');
    });
});

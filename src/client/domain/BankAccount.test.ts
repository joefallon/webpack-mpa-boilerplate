import * as assert from 'assert';

import { BankAccount } from './BankAccount';

describe('BankAccount', () => {
    it('class initialization test', (done) => {
        let account = new BankAccount(100, 'John Doe');

        assert.strictEqual(account.getBalance(), 100);
        assert.strictEqual(account.getName(), 'John Doe');

        done();
    });
});
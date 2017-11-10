import assert = require('assert');
import { BankAccount } from '../../../src/client/domain/BankAccount';

describe('BankAccount', () => {
    it('class initialization test', (done) => {
        let account = new BankAccount(100, 'John Doe');

        assert.equal(account.getBalance(), 100);
        assert.equal(account.getName(), 'John Doe');

        done();
    });
});
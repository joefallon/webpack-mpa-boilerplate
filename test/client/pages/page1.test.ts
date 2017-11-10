import $      = require('jquery');
import assert = require('assert');
import page1  = require('../../../src/client/pages/page1');


describe('page1', () => {
    before(() => {
        const $body = $('body');

        const $accountName = $('<span />').attr('id', 'account_name');
        $body.append($accountName);

        const $accountBalance = $('<span />').attr('id', 'account_balance');
        $body.append($accountBalance);
    });

    after(() => {
        $('#account_name').remove();
        $('#account_balance').remove();
    });

    it('account is displayed correctly', (done) => {
        page1.displayAccount();

        const name = $('#account_name').text();
        assert.equal(name, 'John Doe');

        const balance = $('#account_balance').text();
        assert.equal(balance, '$100.00');

        done();
    });
});
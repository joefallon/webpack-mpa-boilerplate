import * as assert from 'assert';

const page2  = require('./page2');


describe('page2', () => {
    it('fake test pass 1', (done) => {
        page2.dummyFunction();
        assert.ok(true);
        done();
    });

    it('fake test pass 2', (done) => {
        assert.ok(true);
        done();
    });

    it('fake test pass 3', (done) => {
        assert.ok(true);
        done();
    });
});
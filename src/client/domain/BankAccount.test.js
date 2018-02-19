"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var BankAccount_1 = require("../../../src/client/domain/BankAccount");
describe('BankAccount', function () {
    it('class initialization test', function (done) {
        var account = new BankAccount_1.BankAccount(100, 'John Doe');
        assert.equal(account.getBalance(), 100);
        assert.equal(account.getName(), 'John Doe');
        done();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFua0FjY291bnQudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJhbmtBY2NvdW50LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBa0M7QUFDbEMsc0VBQXFFO0FBRXJFLFFBQVEsQ0FBQyxhQUFhLEVBQUU7SUFDcEIsRUFBRSxDQUFDLDJCQUEyQixFQUFFLFVBQUMsSUFBSTtRQUNqQyxJQUFJLE9BQU8sR0FBRyxJQUFJLHlCQUFXLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRS9DLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRTVDLElBQUksRUFBRSxDQUFDO0lBQ1gsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9
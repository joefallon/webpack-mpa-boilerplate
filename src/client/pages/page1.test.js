"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var $ = require("jquery");
var assert = require("assert");
var page1 = require("./page1");
describe('page1', function () {
    before(function () {
        var $body = $('body');
        var $accountName = $('<span />').attr('id', 'account_name');
        $body.append($accountName);
        var $accountBalance = $('<span />').attr('id', 'account_balance');
        $body.append($accountBalance);
    });
    after(function () {
        $('#account_name').remove();
        $('#account_balance').remove();
    });
    it('account is displayed correctly', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var name, balance;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, page1.displayAccount()];
                case 1:
                    _a.sent();
                    name = $('#account_name').text();
                    assert.equal(name, 'John Doe');
                    balance = $('#account_balance').text();
                    assert.equal(balance, '$100.00');
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTEudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhZ2UxLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlCQTZCRzs7O0FBN0JILDBCQUFrQztBQUNsQywrQkFBa0M7QUFDbEMsK0JBQW1DO0FBRW5DLFFBQVEsQ0FBQyxPQUFPLEVBQUU7SUFDZCxNQUFNLENBQUM7UUFDSCxJQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFeEIsSUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDOUQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUUzQixJQUFNLGVBQWUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3BFLEtBQUssQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxLQUFLLENBQUM7UUFDRixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZ0NBQWdDLEVBQUU7Ozs7d0JBQ2pDLHFCQUFNLEtBQUssQ0FBQyxjQUFjLEVBQUUsRUFBQTs7b0JBQTVCLFNBQTRCLENBQUM7b0JBRXZCLElBQUksR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3ZDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO29CQUV6QixPQUFPLEdBQUcsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQzdDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDOzs7O1NBQ3BDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=
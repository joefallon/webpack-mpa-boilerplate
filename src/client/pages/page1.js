"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/* page1.ts */
var $ = require("jquery");
var Accounting = require("accounting");
var BankAccount_1 = require("../domain/BankAccount");
var account = new BankAccount_1.BankAccount(100, 'John Doe');
var balance = account.getBalance();
var name = account.getName();
function displayName() {
    $('#account_name').text(name);
}
function displayBalance() {
    var _this = this;
    return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            setTimeout(function () {
                var formattedBalance = Accounting.formatMoney(balance);
                $('#account_balance').text(formattedBalance);
                resolve();
            }, 0);
            return [2 /*return*/];
        });
    }); });
}
function displayAccount() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    displayName();
                    return [4 /*yield*/, displayBalance()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.displayAccount = displayAccount;
$(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var a;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, displayAccount()];
            case 1:
                _a.sent();
                a = 1 + 2;
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsaUJBaUNBOzs7QUFsQ0EsY0FBYztBQUNkLDBCQUF1QztBQUN2Qyx1Q0FBMkM7QUFDM0MscURBQW9EO0FBR3BELElBQUksT0FBTyxHQUFHLElBQUkseUJBQVcsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDL0MsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ25DLElBQUksSUFBSSxHQUFNLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUVoQztJQUNJLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEMsQ0FBQztBQUVEO0lBQUEsaUJBU0M7SUFSRyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQU8sT0FBTyxFQUFFLE1BQU07O1lBQ3JDLFVBQVUsQ0FBQztnQkFDUCxJQUFNLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3pELENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUM3QyxPQUFPLEVBQUUsQ0FBQztZQUNkLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7O1NBQ1QsQ0FBQyxDQUFDO0FBRVAsQ0FBQztBQUVEOzs7OztvQkFDSSxXQUFXLEVBQUUsQ0FBQztvQkFDZCxxQkFBTSxjQUFjLEVBQUUsRUFBQTs7b0JBQXRCLFNBQXNCLENBQUM7Ozs7O0NBQzFCO0FBSEQsd0NBR0M7QUFFRCxDQUFDLENBQUM7Ozs7b0JBQ0UscUJBQU0sY0FBYyxFQUFFLEVBQUE7O2dCQUF0QixTQUFzQixDQUFDO2dCQUNuQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7OztLQUNqQixDQUFDLENBQUMifQ==
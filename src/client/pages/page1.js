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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsaUJBaUNBOzs7QUFsQ0EsY0FBYztBQUNkLDBCQUF1QztBQUN2Qyx1Q0FBMkM7QUFDM0MscURBQW9EO0FBR3BELElBQUksT0FBTyxHQUFHLElBQUkseUJBQVcsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDL0MsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ25DLElBQUksSUFBSSxHQUFNLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUVoQztJQUNJLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEMsQ0FBQztBQUVEO0lBQUEsaUJBU0M7SUFSRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBTyxPQUFPLEVBQUUsTUFBTTs7WUFDckMsVUFBVSxDQUFDO2dCQUNQLElBQU0sZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDekQsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQzdDLE9BQU8sRUFBRSxDQUFDO1lBQ2QsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7U0FDVCxDQUFDLENBQUM7QUFFUCxDQUFDO0FBRUQ7Ozs7O29CQUNJLFdBQVcsRUFBRSxDQUFDO29CQUNkLHFCQUFNLGNBQWMsRUFBRSxFQUFBOztvQkFBdEIsU0FBc0IsQ0FBQzs7Ozs7Q0FDMUI7QUFIRCx3Q0FHQztBQUVELENBQUMsQ0FBQzs7OztvQkFDRSxxQkFBTSxjQUFjLEVBQUUsRUFBQTs7Z0JBQXRCLFNBQXNCLENBQUM7Z0JBQ25CLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7O0tBQ2pCLENBQUMsQ0FBQyJ9
"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/* page2.ts */
var $ = require("jquery");
var BankAccount_1 = require("../domain/BankAccount");
var account = new BankAccount_1.BankAccount(100, 'John Doe');
var balance = account.getBalance();
var name = account.getName();
// console.log(balance);
function asyncReady() {
    var _this = this;
    return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            setTimeout(function () {
                console.log('ready!');
                resolve();
            }, 0);
            return [2 /*return*/];
        });
    }); });
}
function dummyFunction() {
    var a = 1 + 1;
}
exports.dummyFunction = dummyFunction;
$(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, asyncReady()];
            case 1:
                _a.sent();
                console.log(process.env);
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsaUJBMkJHOzs7QUE1QkgsY0FBYztBQUNkLDBCQUE2QjtBQUU3QixxREFBb0Q7QUFFcEQsSUFBSSxPQUFPLEdBQUcsSUFBSSx5QkFBVyxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUMvQyxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDbkMsSUFBSSxJQUFJLEdBQU0sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBRWhDLHdCQUF3QjtBQUV4QjtJQUFBLGlCQU9DO0lBTkcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFPLE9BQU8sRUFBRSxNQUFNOztZQUNyQyxVQUFVLENBQUM7Z0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEIsT0FBTyxFQUFFLENBQUM7WUFDZCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7OztTQUNULENBQUMsQ0FBQztBQUNQLENBQUM7QUFFRDtJQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFbEIsQ0FBQztBQUhELHNDQUdDO0FBRUQsQ0FBQyxDQUFDOzs7b0JBQ0UscUJBQU0sVUFBVSxFQUFFLEVBQUE7O2dCQUFsQixTQUFrQixDQUFDO2dCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzs7OztLQUM1QixDQUFDLENBQUMifQ==
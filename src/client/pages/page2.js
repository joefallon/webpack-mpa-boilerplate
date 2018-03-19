"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/* page2.ts */
var $ = require("jquery");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsaUJBa0JHOzs7QUFuQkgsY0FBYztBQUNkLDBCQUE2QjtBQUU3QjtJQUFBLGlCQU9DO0lBTkcsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQU8sT0FBTyxFQUFFLE1BQU07O1lBQ3JDLFVBQVUsQ0FBQztnQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QixPQUFPLEVBQUUsQ0FBQztZQUNkLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7O1NBQ1QsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVEO0lBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNsQixDQUFDO0FBRkQsc0NBRUM7QUFFRCxDQUFDLENBQUM7OztvQkFDRSxxQkFBTSxVQUFVLEVBQUUsRUFBQTs7Z0JBQWxCLFNBQWtCLENBQUM7Z0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7O0tBQzVCLENBQUMsQ0FBQyJ9
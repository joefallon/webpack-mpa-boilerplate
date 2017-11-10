"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    var formattedBalance = Accounting.formatMoney(balance);
    $('#account_balance').text(formattedBalance);
}
function displayAccount() {
    displayName();
    displayBalance();
}
exports.displayAccount = displayAccount;
$(function () {
    displayAccount();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGNBQWM7QUFDZCwwQkFBdUM7QUFDdkMsdUNBQTJDO0FBQzNDLHFEQUFvRDtBQUdwRCxJQUFJLE9BQU8sR0FBRyxJQUFJLHlCQUFXLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQy9DLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUNuQyxJQUFJLElBQUksR0FBTSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7QUFFaEM7SUFDSSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xDLENBQUM7QUFFRDtJQUNJLElBQU0sZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6RCxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBRUQ7SUFDSSxXQUFXLEVBQUUsQ0FBQztJQUNkLGNBQWMsRUFBRSxDQUFDO0FBQ3JCLENBQUM7QUFIRCx3Q0FHQztBQUVELENBQUMsQ0FBQztJQUNFLGNBQWMsRUFBRSxDQUFDO0FBQ3JCLENBQUMsQ0FBQyxDQUFDIn0=
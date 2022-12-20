"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(balance, name) {
        this._balance = balance;
        this._name = name;
    }
    getBalance() {
        return this._balance;
    }
    getName() {
        return this._name;
    }
}
exports.BankAccount = BankAccount;
// export = BankAccount;
//# sourceMappingURL=BankAccount.js.map
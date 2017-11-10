export class BankAccount {
    private _balance: number;
    private _name: string;

    public constructor(balance: number, name: string) {
        this._balance = balance;
        this._name = name;
    }

    getBalance(): number {
        return this._balance;
    }

    getName(): string {
        return this._name;
    }
}

// export = BankAccount;
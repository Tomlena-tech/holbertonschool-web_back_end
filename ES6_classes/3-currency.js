export default class Currency {
    constructor(code, name) {
        this._code = code;
        this._name = name;
    }

    get code() {
        return this._code;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
    set code(newCode){
        this._code = newCode;
    }

    displayFullCurrency() {
        return `${this.name} (${this.code})`;
    }
}

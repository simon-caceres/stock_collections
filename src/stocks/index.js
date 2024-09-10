"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stock = void 0;
class Stock {
    constructor(symbol, prices) {
        this.symbol = symbol;
        this.prices = new Map(prices.map(({ date, price }) => [date, price]));
    }
    ;
    GetPrice(date) {
        const price = this.prices.get(date);
        if (price === undefined)
            throw new Error(`No price found for date: ${date}`);
        return price;
    }
    ;
    getSymbol() {
        return this.symbol;
    }
    ;
}
exports.Stock = Stock;
;

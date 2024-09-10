"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Portfolio = void 0;
const dateHandler_1 = require("../utils/dateHandler");
class Portfolio {
    constructor() {
        this.stocks = [];
    }
    addStock(stock) {
        this.stocks.push(stock);
    }
    ;
    GetProfit(startDate, endDate) {
        let totalStartValue = 0;
        let totalEndValue = 0;
        this.stocks.forEach((stock) => {
            totalStartValue += stock.GetPrice(startDate);
            totalEndValue += stock.GetPrice(endDate);
        });
        return totalEndValue - totalStartValue;
    }
    ;
    GetAnnualizedReturn(startDate, endDate) {
        const profit = this.GetProfit(startDate, endDate);
        const dateHandler = new dateHandler_1.DateHandler(startDate, endDate);
        const diffInYears = dateHandler.calculateDiffInYears();
        const initialInvestment = this.stocks.reduce((sum, stock) => sum + stock.GetPrice(startDate), 0);
        if (initialInvestment === 0)
            throw new Error('Initial investment cannot be zero.');
        const annualizedReturn = Math.pow(1 + profit / initialInvestment, 1 / diffInYears) - 1;
        return annualizedReturn;
    }
    ;
}
exports.Portfolio = Portfolio;
;

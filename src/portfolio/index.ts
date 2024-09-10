import { Stock } from "../stocks";
import { DateHandler } from "../utils/dateHandler";

export class Portfolio {
    private stocks: Stock[] = [];

    addStock(stock: Stock) {
        this.stocks.push(stock);
    };

    GetProfit(startDate: string, endDate: string): number {
        let totalStartValue = 0;
        let totalEndValue = 0;

        this.stocks.forEach((stock) => {
            totalStartValue += stock.GetPrice(startDate);
            totalEndValue += stock.GetPrice(endDate);
        });

        return totalEndValue - totalStartValue;
    };

    GetAnnualizedReturn(startDate: string, endDate: string): number {
        const profit = this.GetProfit(startDate, endDate);

        const dateHandler = new DateHandler(startDate, endDate);

        const diffInYears = dateHandler.calculateDiffInYears();

        const initialInvestment = this.stocks.reduce((sum, stock) => sum + stock.GetPrice(startDate), 0);

        if (initialInvestment === 0) throw new Error('Initial investment cannot be zero.');

        const annualizedReturn = Math.pow(1 + profit / initialInvestment, 1 / diffInYears) - 1;

        return annualizedReturn;
    };

};

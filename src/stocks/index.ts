import { StockPrice } from "../interfaces";

export class Stock {
    private prices: Map<string, number>;

    constructor(private symbol: string, prices: StockPrice[]) {
        this.prices = new Map(prices.map(({ date, price }) => [date, price]));
    };

    GetPrice(date: string): number {
        const price = this.prices.get(date);

        if (price === undefined) throw new Error(`No price found for date: ${date}`);

        return price;
    };

    getSymbol(): string {
        return this.symbol;
    };
};

import { Portfolio } from "./portfolio";
import { Stock } from "./stocks";

const portfolio = new Portfolio();

const stockA = new Stock('AAPL', [
    { date: '2023-01-01', price: 150 },
    { date: '2024-01-01', price: 200 },
]);
const stockB = new Stock('GOOGL', [
    { date: '2023-01-01', price: 120 },
    { date: '2024-01-01', price: 180 },
]);

portfolio.addStock(stockA);
portfolio.addStock(stockB);

const profit = portfolio.GetProfit('2023-01-01', '2024-01-01');
console.log(`Profit: $${profit}`);

const annualizedReturn = portfolio.GetAnnualizedReturn('2023-01-01', '2024-01-01');
console.log(`Annualized Return: ${(annualizedReturn * 100).toFixed(2)}%`);

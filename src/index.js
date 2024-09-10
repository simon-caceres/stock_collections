"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const portfolio_1 = require("./portfolio");
const stocks_1 = require("./stocks");
const portfolio = new portfolio_1.Portfolio();
const stockA = new stocks_1.Stock('AAPL', [
    { date: '2023-01-01', price: 150 },
    { date: '2024-01-01', price: 200 },
]);
const stockB = new stocks_1.Stock('GOOGL', [
    { date: '2023-01-01', price: 120 },
    { date: '2024-01-01', price: 180 },
]);
portfolio.addStock(stockA);
portfolio.addStock(stockB);
const profit = portfolio.GetProfit('2023-01-01', '2024-01-01');
console.log(`Profit: $${profit}`);
const annualizedReturn = portfolio.GetAnnualizedReturn('2023-01-01', '2024-01-01');
console.log(`Annualized Return: ${(annualizedReturn * 100).toFixed(2)}%`);

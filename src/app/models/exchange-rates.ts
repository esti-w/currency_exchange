import { Coins } from "./coins";

export interface ExchangeRates {
    success: boolean,
    timestamp: number,
    base: string,
    date: Date,
    rates:Coins[];
}

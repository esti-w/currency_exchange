import { Component, OnInit } from '@angular/core';
import { Coins } from 'src/app/models/coins';
import { ConvertibleDataService } from 'src/app/Servies/convertible-data.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {

  constructor(public listCurrency: ConvertibleDataService) { }
  numToConvert: number = this.listCurrency.rates[this.listCurrency.rates.length-1].sumToConvert;
  result: number = this.listCurrency.rates[this.listCurrency.rates.length-1].resultConvert;
  CoinFrom: string = this.listCurrency.rates[this.listCurrency.rates.length-1].fromCoint;
  CoinTo: string = this.listCurrency.rates[this.listCurrency.rates.length-1].toCoint;
  arrayCoins: any;
  listCoins: any = {};
  ratesElement: Coins = {
    fromCoint: '',
    sumToConvert: 0,
    toCoint: '',
    resultConvert: 0
  };


  // numConvert(numToCoins: number) {

  // }
  ngOnInit(): void {
    this.listCurrency.httpGet(this.listCurrency.currencyExchangeIP).subscribe(
      data => {
        for (let key in data) {
          if (key == "rates") {
            this.listCoins = data[key];
            this.arrayCoins = Object.entries(this.listCoins);
          }
        }
      }
    )
  }
  resultOfConvert() {
    this.result = (this.numToConvert) / (this.findCurrencyValue(this.CoinFrom)) * (this.findCurrencyValue(this.CoinTo));
    this.ratesElement.fromCoint = this.CoinFrom;
    this.ratesElement.resultConvert = this.result;
    this.ratesElement.sumToConvert = this.numToConvert;
    this.ratesElement.toCoint = this.CoinTo;
    this.listCurrency.rates.push(this.ratesElement)
    //אני צריכה ליצור שמירה חזקה כדי שהנתונים לא ישתנו בפעם הבאה שיכנס
  }
  findCurrencyValue(coin: string) {
    for (let coins in this.arrayCoins) {
      if (this.arrayCoins[coins][0] == coin) {
        return this.arrayCoins[coins][1]
      }
    }
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Coins } from '../models/coins';

@Injectable({
  providedIn: 'root'
})

export class ConvertibleDataService {

  public rates: Coins[]=[{
    fromCoint: 'ILS',
    sumToConvert: 1,
    toCoint: 'ILS',
    resultConvert: 1
  }];
  public currencyExchangeIP='http://data.fixer.io/api/latest?access_key=9ab828ed158322ae5bad252d5a2f1883&format=1';

  constructor(private http: HttpClient) { }

  httpGet(url:any): Observable<any> {
    return this.http.get<any>(url);
  }
}

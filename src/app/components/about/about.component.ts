import { Component, OnInit } from '@angular/core';
import { ConvertibleDataService } from 'src/app/Servies/convertible-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public listCurrency: ConvertibleDataService) { }
  count: number = 0;

  ngOnInit(): void {

  }

}

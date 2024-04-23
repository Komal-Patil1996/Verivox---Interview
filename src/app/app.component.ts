import { Component, OnInit } from '@angular/core';
import { TariffDetailsService } from './services/tariff-details.service';
import { Tariffs } from './model/tariff-detail.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tariffs : Tariffs[] = [];
  sortedTariffs: Tariffs[] = [];

  constructor(private tarrifDetailService : TariffDetailsService) {}


  ngOnInit(){
    this.tarrifDetailService.getTariffDetailsData().subscribe(res => {
      this.tariffs = res;
    });
  }

  sortTariffs(sortOption: any): void {
    switch (sortOption) {
      case 'name':
        this.sortedTariffs = this.tariffs.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'downloadSpeed':
        this.sortedTariffs = this.tariffs.sort((a, b) => a.downloadSpeed - b.downloadSpeed);
        break;
      case 'uploadSpeed':
        this.sortedTariffs = this.tariffs.sort((a, b) => a.uploadSpeed - b.uploadSpeed);
        break;
      case 'price':
        this.sortedTariffs = this.tariffs.sort((a, b) => a.price - b.price);
        break;
      default:
        this.sortedTariffs = this.tariffs;
        break;
    }
  }
}

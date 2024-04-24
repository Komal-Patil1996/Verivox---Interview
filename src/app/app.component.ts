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
  tariffsResultList : Tariffs[] = [];
  sortedTariffs: Tariffs[] = [];

  constructor(private tarrifDetailService : TariffDetailsService) {}


  ngOnInit(){
    this.tarrifDetailService.getTariffDetailsData().subscribe(res => {
      this.tariffs = res;
      this.tariffsResultList = res;

    });
  }

  sortTariffs(sortOption: Number | string): void {
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

  onSearchChange(searchTerm: string): void {
    if(searchTerm === ""){
      this.tariffs = this.tariffsResultList;
    }
    this.tariffs = this.tariffsResultList.filter(tariff => 
      tariff.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}

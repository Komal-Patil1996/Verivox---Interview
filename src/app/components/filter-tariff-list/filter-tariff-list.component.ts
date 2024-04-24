import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-tariff-list',
  templateUrl: './filter-tariff-list.component.html',
  styleUrls: ['./filter-tariff-list.component.scss']
})
export class FilterTariffListComponent {
  @Output() sortOptionChanged = new EventEmitter<string>();

  selectedSortOption = 'name';

  sortTariffs(): void {
    this.sortOptionChanged.emit(this.selectedSortOption);
  }
}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-by-name',
  templateUrl: './filter-by-name.component.html',
  styleUrls: ['./filter-by-name.component.scss']
})
export class FilterByNameComponent {
  @Output() searchChange = new EventEmitter<string>();

  searchTerm = '';

  onSearchChange(): void {
    this.searchChange.emit(this.searchTerm);
  }
}

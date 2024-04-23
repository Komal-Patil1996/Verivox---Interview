import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTariffListComponent } from './filter-tariff-list.component';
import { FormsModule } from '@angular/forms';

describe('FilterTariffListComponent', () => {
  let component: FilterTariffListComponent;
  let fixture: ComponentFixture<FilterTariffListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterTariffListComponent ],
      imports: [
        FormsModule
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterTariffListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByNameComponent } from './filter-by-name.component';
import { FormsModule } from '@angular/forms';

describe('FilterByNameComponent', () => {
  let component: FilterByNameComponent;
  let fixture: ComponentFixture<FilterByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterByNameComponent ],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

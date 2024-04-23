import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TariffDetailsService } from './services/tariff-details.service';
import { Tariffs } from './model/tariff-detail.model';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable, of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let tariffService: MockTariffDetailsService;


  class MockTariffDetailsService {
    getTariffDetailsData(): Observable<Tariffs[]> {
      return of([

        {
          "id": 1,
          "name": "Tarif Name a",
          "downloadSpeed": 10000000,
          "uploadSpeed": 6000000,
          "benefits": [
              "Tarif benefit 1",
              "Tarif benefit 2",
              "Tarif benefit 3",
              "Tarif benefit 4"
          ],
          "price": 123.45
      }
      ]);
    }
  }
  

  const mockTariffs: Tariffs[] = [
    {
        "id": 1,
        "name": "Tarif Name a",
        "downloadSpeed": 10000000,
        "uploadSpeed": 6000000,
        "benefits": [
            "Tarif benefit 1",
            "Tarif benefit 2",
            "Tarif benefit 3",
            "Tarif benefit 4"
        ],
        "price": 123.45
    },
    {
        "id": 2,
        "name": "Tarif Name b",
        "downloadSpeed": 12000000,
        "uploadSpeed": 6000000,
        "benefits": [
            "Tarif benefit 1",
            "Tarif benefit 2",
            "Tarif benefit 3"
        ],
        "price": 123.45
    }
  ];
  

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: TariffDetailsService, useClass: MockTariffDetailsService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
      
    }).compileComponents();

    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    tariffService = TestBed.inject(TariffDetailsService);
    fixture.detectChanges();

  });

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });



  it('should call getTariffDetailsData on intialization', fakeAsync( () => {
    spyOn(tariffService, 'getTariffDetailsData').and.callThrough();
    component.ngOnInit();
    expect(component.tariffs.length).toBe(1);
  }));

  it('should sort tariffs by name', () => {
    component.tariffs = mockTariffs;
    component.sortTariffs('name');
    expect(component.sortedTariffs[0].name).toEqual('Tarif Name a');
    expect(component.sortedTariffs[1].name).toEqual('Tarif Name b');
   
   });
  it('should sort tariffs by downloadSpeed', () => {
    component.tariffs = mockTariffs;
    component.sortTariffs('downloadSpeed');
    expect(component.sortedTariffs[0].downloadSpeed).toEqual(10000000);
    expect(component.sortedTariffs[1].downloadSpeed).toEqual(12000000);
   
  });
});

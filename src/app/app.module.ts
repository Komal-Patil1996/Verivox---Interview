import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterTariffListComponent } from './components/filter-tariff-list/filter-tariff-list.component';
import { FormsModule } from '@angular/forms';
import { FilterByNameComponent } from './components/filter-by-name/filter-by-name.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterTariffListComponent,
    FilterByNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, CountryCardComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

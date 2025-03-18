import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReportSelectorComponent } from './components/report-selector/report-selector.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ReportSelectorComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
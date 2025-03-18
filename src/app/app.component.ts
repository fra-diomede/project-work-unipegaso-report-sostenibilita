import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReportSelectorComponent } from './components/report-selector/report-selector.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [NavbarComponent, ReportSelectorComponent, FooterComponent]
})
export class AppComponent {
  title = 'Vodafone Italia - Report di Sostenibilità';
}

import { Component } from '@angular/core';
import { Location } from '@angular/common'; // Importa Location

@Component({
  selector: 'app-report-not-found',
  templateUrl: './report-not-found.component.html',
  styleUrls: ['./report-not-found.component.css']
})
export class ReportNotFoundComponent {
  constructor(private location: Location) { } // Inietta Location

  goBack() {
    this.location.back(); // Torna alla pagina precedente
  }
}
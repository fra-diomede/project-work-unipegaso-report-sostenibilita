import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-report-selector',
  templateUrl: './report-selector.component.html',
  styleUrls: ['./report-selector.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ReportSelectorComponent implements OnInit {
  availableYears: string[] = [];
  selectedYear: string | null = null;
  isDownloadDisabled: boolean = true;


  constructor() {
    this.populateYears();
  }

  populateYears() {
    const currentYear = new Date().getFullYear();
    const startYear = 2001;
    for (let i = currentYear; i >= startYear; i--) {
      this.availableYears.push(`${i - 1}-${i}`);
    }
  }

  downloadSelectedReport() {
    if (!this.selectedYear) return;

    const selectedYears = this.selectedYear.replace('-', '_');
    const baseUrl = 'https://a-wb.vodafone.it/content/dam/webaem/vodafone-italia/chi_siamo/obiettivi_e_risultati/bilanci/';
    const fileName = `Bilancio_${selectedYears}.pdf`;
    const fileUrl = `${baseUrl}${fileName}`;

    window.open(fileUrl, '_blank');    
  }



  ngOnInit() {
    this.updateDownloadButtonState();
  }

  onYearChange() {
    this.updateDownloadButtonState();
  }
  private updateDownloadButtonState() {
    this.isDownloadDisabled = !this.selectedYear;
  }
}
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeedbackMessage } from '../feedback-message/feedback-message';
import { FeedbackMessageFactory } from '../feedback-message/feedback-message-factory';
import { FeedbackMessageComponent } from '../feedback-message/feedback-message.component';
import { FeedbackMessageType } from '../feedback-message/feedback-message-type';


@Component({
  selector: 'app-report-selector',
  templateUrl: './report-selector.component.html',
  styleUrls: ['./report-selector.component.css'],
  imports: [CommonModule, FormsModule, FeedbackMessageComponent]
})
export class ReportSelectorComponent implements OnInit {
  availableYears: string[] = [];
  selectedYear: string | null = "";
  isDownloadDisabled = true;
  feedbackMessage: FeedbackMessage | undefined = undefined;
  @Output() feedbackMessageEmitter = new EventEmitter<FeedbackMessage | undefined>();

  constructor() {
  }

  ngOnInit() {
    this.populateYears();
  }

  downloadSelectedReport() {
    if (!this.selectedYear) return;

    const selectedYears = this.selectedYear.replace('-', '_');
    const baseUrl = 'https://a-wb.vodafone.it/content/dam/webaem/vodafone-italia/chi_siamo/obiettivi_e_risultati/bilanci/';
    const fileName = `Bilancio_${selectedYears}.pdf`;
    const fileUrl = `${baseUrl}${fileName}`;
 
    fetch(fileUrl)
    .then(response =>{
      return response.blob()
    })
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      link.click();
      window.URL.revokeObjectURL(url);
      this.feedbackMessage = FeedbackMessageFactory.getFeedbackMessage(FeedbackMessageType.SUCCESS, 'Operazione conclusa con successo: Report scaricato!')
    }).catch(err => {
      this.feedbackMessage = FeedbackMessageFactory.getFeedbackMessage(FeedbackMessageType.ERROR, 'Errore durante il download: Report non disponibile!')
    });
  }

  setSelectedYear(event: any) {
    this.selectedYear = event as string;
  }

  private populateYears() {
    const currentYear = new Date().getFullYear();
    const startYear = 2001;
    for (let i = currentYear; i >= startYear; i--) {
      this.availableYears.push(`${i - 1}-${i}`);
    }
  }

}
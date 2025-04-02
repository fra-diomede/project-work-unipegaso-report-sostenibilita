import { ChangeDetectorRef, Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReportSelectorComponent } from './components/report-selector/report-selector.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeedbackMessage } from './components/feedback-message/feedback-message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [NavbarComponent, ReportSelectorComponent, FooterComponent]
})
export class AppComponent {
  feedbackMessage: FeedbackMessage | undefined; 
  title = 'Vodafone Italia - Report di Sostenibilità';

  constructor(
    private _cdr: ChangeDetectorRef
  ){

  }

  setFeedbackMessage(event: FeedbackMessage | undefined){
    this.feedbackMessage = event;
    this._cdr.detectChanges();
  }

}


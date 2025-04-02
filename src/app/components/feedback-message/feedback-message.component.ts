import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {FeedbackMessage} from './feedback-message';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-feedback-message',
    templateUrl: './feedback-message.component.html',
    styleUrls: ['./feedback-message.component.scss'],
    imports:[FontAwesomeModule],
    encapsulation: ViewEncapsulation.None
})
export class FeedbackMessageComponent implements OnInit {

    @Input() feedbackMessage!: FeedbackMessage | undefined;
    @Input() classStyle!: string;
    @Input() showCloseButton: boolean = true;
    @Input() id!: string;
    faXmark = faXmark;

    ngOnInit() {
        this.classStyle = this.classStyle ?? 'col-xs-12 col-sm-12 col-md-12 col-lg-12';
        this.id = this.id ?? 'feedback-message';
    }

    close() {
        this.feedbackMessage = undefined;
    }
}

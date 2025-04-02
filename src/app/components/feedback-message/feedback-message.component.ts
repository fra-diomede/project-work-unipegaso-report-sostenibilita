import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {FeedbackMessage} from './feedback-message';

@Component({
    selector: 'app-feedback-message',
    templateUrl: './feedback-message.component.html',
    styleUrls: ['./feedback-message.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FeedbackMessageComponent implements OnInit {

    @Input() feedbackMessage!: FeedbackMessage | undefined;
    @Input() classStyle!: string;
    @Input() showCloseButton: boolean = true;
    @Input() id!: string;

    ngOnInit() {
        this.classStyle = this.classStyle ?? 'col-xs-12 col-sm-12 col-md-12 col-lg-12';
        this.id = this.id ?? 'feedback-message';
    }

    close() {
        this.feedbackMessage = undefined;
    }
}

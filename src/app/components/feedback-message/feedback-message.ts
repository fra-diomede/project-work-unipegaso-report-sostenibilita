import {FeedbackMessageType} from "./feedback-message-type";
import {FeedbackMessageProperty} from "./feedback-message-property";

export class FeedbackMessage {
    private feedbackProperties = new Map<FeedbackMessageType, any>();
    tipo!: FeedbackMessageType;
    testo!: string;
    property!: FeedbackMessageProperty;

    constructor(tipo: FeedbackMessageType, testo: string) {
        this.initProperty();
        this.tipo = tipo;
        this.testo = testo;
        this.property = this.feedbackProperties.get(tipo);
    }

    private initProperty() {
        this.feedbackProperties.set(
            FeedbackMessageType.INFO, {
                cssClass: 'alert-info',
                icon: 'i-info_outline'
            });
        this.feedbackProperties.set(
            FeedbackMessageType.SUCCESS, {
                cssClass: 'alert-success',
                icon: 'i-check_circle'
            });
        this.feedbackProperties.set(
            FeedbackMessageType.ERROR, {
                cssClass: 'alert-danger',
                icon: 'i-error'
            });
        this.feedbackProperties.set(
            FeedbackMessageType.WARNING, {
                cssClass: 'alert-warning',
                icon: 'i-warning'
            });
    }    
}

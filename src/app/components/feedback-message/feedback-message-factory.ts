import {Injectable} from "@angular/core";
import {ResponseError} from "../types/response-error.types";
import {HttpStatusCode} from "@angular/common/http";
import {FeedbackMessage} from "./feedback-message";
import {FeedbackMessageType} from "./feedback-message-type";
import {feedbackMessages} from "../../../assets/string/messages";

@Injectable()
export class FeedbackMessageFactory {

    public static getFeedbackMessage(type: FeedbackMessageType, message?: string, idFeedbackMessage?: string): FeedbackMessage {
        this.scrollToMessage('smooth', 500, idFeedbackMessage);
        if (FeedbackMessageType.INFO == type) {
            return new FeedbackMessage(FeedbackMessageType.INFO, message ?? '');
        } else if (FeedbackMessageType.SUCCESS == type) {
            return new FeedbackMessage(FeedbackMessageType.SUCCESS, message ?? feedbackMessages.success.genericSuccess);
        } else if (FeedbackMessageType.WARNING == type) {
            return new FeedbackMessage(FeedbackMessageType.WARNING, message ?? '');
        } else {
            return new FeedbackMessage(FeedbackMessageType.ERROR, message ?? feedbackMessages.error.systemError);
        }
    }

    public static getSuccessFeedbackMessage(message?: string, idFeedbackMessage?: string): FeedbackMessage {
        this.scrollToMessage('smooth', 500, idFeedbackMessage);
        return this.getFeedbackMessage(FeedbackMessageType.SUCCESS, message);
    }

    public static getFeedbackMessageByError(error: ResponseError, message?: string, idFeedbackMessage?: string): FeedbackMessage {
        let httpStatus = error.status;
        let _message = message ?? error.error.message;
        this.scrollToMessage('smooth', 500, idFeedbackMessage);
        if (httpStatus == HttpStatusCode.Unauthorized || httpStatus == HttpStatusCode.Forbidden) {
            return this.getFeedbackMessage(FeedbackMessageType.ERROR, _message ?? feedbackMessages.error.authError);
        } else if (httpStatus == HttpStatusCode.ServiceUnavailable) {
            return this.getFeedbackMessage(FeedbackMessageType.ERROR, _message ?? feedbackMessages.error.serviceUnavailable);
        } else if (httpStatus == HttpStatusCode.InternalServerError) {
            return this.getFeedbackMessage(FeedbackMessageType.ERROR, _message ?? feedbackMessages.error.systemError);
        } else {
            return this.getFeedbackMessage(FeedbackMessageType.ERROR, _message ?? feedbackMessages.error.systemError)
        }
    }

    public static scrollToMessage(behavior: ScrollBehavior = 'smooth', timeout = 200, idFeedbackMessage?: string) {
        let idMessage = idFeedbackMessage || 'feedback-message';
        setTimeout(() => {
            let feedbackMessage = document.getElementById(idMessage) as HTMLElement;
            if (feedbackMessage) {
                feedbackMessage.focus();
                feedbackMessage.scrollIntoView({ behavior: behavior });
            }
        }, timeout);
      }
}
import { HttpErrorResponse } from "@angular/common/http";

export class ResponseError extends HttpErrorResponse {
    override error: ErrorItem = new ErrorItem;
}

export class ErrorItem {
    timestamp!: string;
    message!: string;
    detail!: string;
    httpCodeMessage!: string;
}
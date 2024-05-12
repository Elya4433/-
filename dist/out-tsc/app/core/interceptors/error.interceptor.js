import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";
let ErrorInterceptor = class ErrorInterceptor {
    constructor() { }
    intercept(request, next) {
        return next.handle(request)
            .pipe(catchError((error) => {
            let errorMessage = '';
            if (error.error instanceof ErrorEvent) {
                console.log('This is client side error');
                errorMessage = `Error ${error.error.message}`;
            }
            else {
                console.log('This is server error');
                errorMessage = `Error code ${error.status}, Message ${error.message}`;
            }
            console.log(errorMessage);
            return throwError(() => new Error(errorMessage));
        }));
    }
};
ErrorInterceptor = __decorate([
    Injectable()
], ErrorInterceptor);
export { ErrorInterceptor };
//# sourceMappingURL=error.interceptor.js.map
import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { catchError, of } from "rxjs";
let DataService = class DataService {
    constructor(http) {
        this.http = http;
    }
    getStudents() {
        return this.http.get('assets/data1.json')
            .pipe(catchError(err => {
            console.log(err);
            return of([]);
        }));
    }
};
DataService = __decorate([
    Injectable({ providedIn: 'root' })
], DataService);
export { DataService };
//# sourceMappingURL=data.service.js.map
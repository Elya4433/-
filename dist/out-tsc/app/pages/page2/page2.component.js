import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
let Page2Component = class Page2Component {
    ;
    constructor() {
        this.users = [];
        this.myForm = new FormGroup({
            "userName": new FormControl('', Validators.required),
            "userSurname": new FormControl('', Validators.required)
        });
        this.onreInitForm();
    }
    onSubmit() {
        this.users.push(this.myForm.getRawValue());
    }
    onreInitForm() {
        this.myForm = new FormGroup({
            "userName": new FormControl('', Validators.required),
            "userSurname": new FormControl('', Validators.required)
        });
    }
};
Page2Component = __decorate([
    Component({
        selector: 'app-page2',
        templateUrl: './page2.component.html',
        styleUrls: ['./page2.component.css']
    })
], Page2Component);
export { Page2Component };
//# sourceMappingURL=page2.component.js.map
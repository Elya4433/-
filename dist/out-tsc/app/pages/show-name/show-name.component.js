import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ShowNameComponent = class ShowNameComponent {
    constructor(activateRouter, router) {
        this.activateRouter = activateRouter;
        this.router = router;
        this.name = "Имя по умолчанию";
        this.name = activateRouter.snapshot.params['name'];
    }
    goMain() {
        // this.router.navigate(['/']);
        this.router.navigateByUrl('/');
    }
};
ShowNameComponent = __decorate([
    Component({
        selector: 'app-show-name',
        templateUrl: './show-name.component.html',
        styleUrls: ['./show-name.component.css']
    })
], ShowNameComponent);
export { ShowNameComponent };
//# sourceMappingURL=show-name.component.js.map
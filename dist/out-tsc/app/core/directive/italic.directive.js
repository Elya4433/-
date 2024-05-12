import { __decorate } from "tslib";
import { Directive } from "@angular/core";
let ItalicDirective = class ItalicDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.elementRef.nativeElement.style.fontStyle = 'italic';
    }
};
ItalicDirective = __decorate([
    Directive({
        selector: '[italic]'
    })
], ItalicDirective);
export { ItalicDirective };
//# sourceMappingURL=italic.directive.js.map
import { __decorate } from "tslib";
import { Pipe } from "@angular/core";
let ReversePipe = class ReversePipe {
    transform(value, options) {
        console.log(options);
        if (!value)
            return;
        if (options.isAddingPointInTheEnd) {
            value = value.map(item => item + "!");
        }
        if (options.isAddingTwoPointsInTheEnd) {
            value = value.map(item => item + "??");
        }
        return value.reverse();
    }
};
ReversePipe = __decorate([
    Pipe({
        name: 'reverse'
    })
], ReversePipe);
export { ReversePipe };
//# sourceMappingURL=reverse.pipe.js.map
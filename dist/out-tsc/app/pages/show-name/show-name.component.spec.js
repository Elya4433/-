import { TestBed } from '@angular/core/testing';
import { ShowNameComponent } from './show-name.component';
describe('ShowNameComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ShowNameComponent]
        });
        fixture = TestBed.createComponent(ShowNameComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=show-name.component.spec.js.map
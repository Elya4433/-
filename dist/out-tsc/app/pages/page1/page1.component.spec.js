import { TestBed } from '@angular/core/testing';
import { Page1Component } from './page1.component';
describe('Page1Component', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [Page1Component]
        });
        fixture = TestBed.createComponent(Page1Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=page1.component.spec.js.map
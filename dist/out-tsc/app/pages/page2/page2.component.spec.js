import { TestBed } from '@angular/core/testing';
import { Page2Component } from './page2.component';
describe('Page2Component', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [Page2Component]
        });
        fixture = TestBed.createComponent(Page2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=page2.component.spec.js.map
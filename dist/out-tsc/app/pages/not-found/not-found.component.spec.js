import { TestBed } from '@angular/core/testing';
import { NotFoundComponent } from './not-found.component';
describe('NotFoundComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NotFoundComponent]
        });
        fixture = TestBed.createComponent(NotFoundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=not-found.component.spec.js.map
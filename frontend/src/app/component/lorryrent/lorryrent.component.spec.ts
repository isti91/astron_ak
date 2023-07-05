import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LorryrentComponent } from './lorryrent.component';

describe('LorryrentComponent', () => {
  let component: LorryrentComponent;
  let fixture: ComponentFixture<LorryrentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LorryrentComponent]
    });
    fixture = TestBed.createComponent(LorryrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

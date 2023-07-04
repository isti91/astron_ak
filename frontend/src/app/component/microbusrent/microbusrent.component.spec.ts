import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrobusrentComponent } from './microbusrent.component';

describe('MicrobusrentComponent', () => {
  let component: MicrobusrentComponent;
  let fixture: ComponentFixture<MicrobusrentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MicrobusrentComponent]
    });
    fixture = TestBed.createComponent(MicrobusrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

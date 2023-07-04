import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailrentComponent } from './trailrent.component';

describe('TrailrentComponent', () => {
  let component: TrailrentComponent;
  let fixture: ComponentFixture<TrailrentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrailrentComponent]
    });
    fixture = TestBed.createComponent(TrailrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorrentComponent } from './motorrent.component';

describe('MotorrentComponent', () => {
  let component: MotorrentComponent;
  let fixture: ComponentFixture<MotorrentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotorrentComponent]
    });
    fixture = TestBed.createComponent(MotorrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

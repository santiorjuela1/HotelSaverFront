import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInHotelComponent } from './log-in-hotel.component';

describe('LogInHotelComponent', () => {
  let component: LogInHotelComponent;
  let fixture: ComponentFixture<LogInHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogInHotelComponent]
    });
    fixture = TestBed.createComponent(LogInHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

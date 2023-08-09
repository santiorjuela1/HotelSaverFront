import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInformationHotelComponent } from './update-information-hotel.component';

describe('UpdateInformationHotelComponent', () => {
  let component: UpdateInformationHotelComponent;
  let fixture: ComponentFixture<UpdateInformationHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateInformationHotelComponent]
    });
    fixture = TestBed.createComponent(UpdateInformationHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

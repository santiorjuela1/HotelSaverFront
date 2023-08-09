import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInformationUserComponent } from './update-information-user.component';

describe('UpdateInformationUserComponent', () => {
  let component: UpdateInformationUserComponent;
  let fixture: ComponentFixture<UpdateInformationUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateInformationUserComponent]
    });
    fixture = TestBed.createComponent(UpdateInformationUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

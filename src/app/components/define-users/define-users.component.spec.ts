import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineUsersComponent } from './define-users.component';

describe('DefineUsersComponent', () => {
  let component: DefineUsersComponent;
  let fixture: ComponentFixture<DefineUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefineUsersComponent]
    });
    fixture = TestBed.createComponent(DefineUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralToolbarComponent } from './general-toolbar.component';

describe('GeneralToolbarComponent', () => {
  let component: GeneralToolbarComponent;
  let fixture: ComponentFixture<GeneralToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralToolbarComponent]
    });
    fixture = TestBed.createComponent(GeneralToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

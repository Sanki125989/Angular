import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmantListComponent } from './AppointmantListComponent';

describe('AppointmantListComponent', () => {
  let component: AppointmantListComponent;
  let fixture: ComponentFixture<AppointmantListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmantListComponent]
    });
    fixture = TestBed.createComponent(AppointmantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

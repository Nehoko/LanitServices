import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutetaxiComponent } from './route-taxi.component';

describe('RoutetaxiComponent', () => {
  let component: RoutetaxiComponent;
  let fixture: ComponentFixture<RoutetaxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutetaxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutetaxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

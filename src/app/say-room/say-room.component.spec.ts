import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayRoomComponent } from './say-room.component';

describe('SayRoomComponent', () => {
  let component: SayRoomComponent;
  let fixture: ComponentFixture<SayRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

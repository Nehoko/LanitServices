import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveFriendComponent } from './drive-friend.component';

describe('DriveFriendComponent', () => {
  let component: DriveFriendComponent;
  let fixture: ComponentFixture<DriveFriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriveFriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

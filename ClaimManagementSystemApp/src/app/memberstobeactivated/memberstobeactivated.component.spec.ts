import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberstobeactivatedComponent } from './memberstobeactivated.component';

describe('MemberstobeactivatedComponent', () => {
  let component: MemberstobeactivatedComponent;
  let fixture: ComponentFixture<MemberstobeactivatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberstobeactivatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberstobeactivatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

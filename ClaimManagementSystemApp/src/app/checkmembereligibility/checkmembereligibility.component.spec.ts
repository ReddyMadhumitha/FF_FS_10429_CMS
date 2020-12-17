import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckmembereligibilityComponent } from './checkmembereligibility.component';

describe('CheckmembereligibilityComponent', () => {
  let component: CheckmembereligibilityComponent;
  let fixture: ComponentFixture<CheckmembereligibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckmembereligibilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckmembereligibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

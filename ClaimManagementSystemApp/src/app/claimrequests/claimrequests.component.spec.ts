import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimrequestsComponent } from './claimrequests.component';

describe('ClaimrequestsComponent', () => {
  let component: ClaimrequestsComponent;
  let fixture: ComponentFixture<ClaimrequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimrequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

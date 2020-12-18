import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseClaimRequestComponent } from './raise-claim-request.component';

describe('RaiseClaimRequestComponent', () => {
  let component: RaiseClaimRequestComponent;
  let fixture: ComponentFixture<RaiseClaimRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaiseClaimRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaiseClaimRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimstobeprocessedComponent } from './claimstobeprocessed.component';

describe('ClaimstobeprocessedComponent', () => {
  let component: ClaimstobeprocessedComponent;
  let fixture: ComponentFixture<ClaimstobeprocessedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimstobeprocessedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimstobeprocessedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

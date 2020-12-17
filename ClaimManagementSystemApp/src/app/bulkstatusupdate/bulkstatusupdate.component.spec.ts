import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkstatusupdateComponent } from './bulkstatusupdate.component';

describe('BulkstatusupdateComponent', () => {
  let component: BulkstatusupdateComponent;
  let fixture: ComponentFixture<BulkstatusupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkstatusupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkstatusupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

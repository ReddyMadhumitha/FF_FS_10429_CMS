import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseclaimrequestComponent } from './raiseclaimrequest.component';

describe('RaiseclaimrequestComponent', () => {
  let component: RaiseclaimrequestComponent;
  let fixture: ComponentFixture<RaiseclaimrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaiseclaimrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaiseclaimrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

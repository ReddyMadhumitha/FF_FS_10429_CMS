import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatememberstatusComponent } from './updatememberstatus.component';

describe('UpdatememberstatusComponent', () => {
  let component: UpdatememberstatusComponent;
  let fixture: ComponentFixture<UpdatememberstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatememberstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatememberstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

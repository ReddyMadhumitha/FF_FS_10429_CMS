import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListclaimsComponent } from './listclaims.component';

describe('ListclaimsComponent', () => {
  let component: ListclaimsComponent;
  let fixture: ComponentFixture<ListclaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListclaimsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListclaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

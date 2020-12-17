import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchclaimComponent } from './searchclaim.component';

describe('SearchclaimComponent', () => {
  let component: SearchclaimComponent;
  let fixture: ComponentFixture<SearchclaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchclaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

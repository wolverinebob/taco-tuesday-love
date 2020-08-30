import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNYCComponent } from './view-nyc.component';

describe('ViewNYCComponent', () => {
  let component: ViewNYCComponent;
  let fixture: ComponentFixture<ViewNYCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNYCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNYCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

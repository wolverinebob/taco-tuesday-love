import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSRQComponent } from './view-srq.component';

describe('ViewSRQComponent', () => {
  let component: ViewSRQComponent;
  let fixture: ComponentFixture<ViewSRQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSRQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSRQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPHLComponent } from './view-phl.component';

describe('ViewPHLComponent', () => {
  let component: ViewPHLComponent;
  let fixture: ComponentFixture<ViewPHLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPHLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPHLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

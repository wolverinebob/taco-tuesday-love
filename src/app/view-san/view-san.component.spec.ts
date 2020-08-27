import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSANComponent } from './view-san.component';

describe('ViewSANComponent', () => {
  let component: ViewSANComponent;
  let fixture: ComponentFixture<ViewSANComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSANComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSANComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

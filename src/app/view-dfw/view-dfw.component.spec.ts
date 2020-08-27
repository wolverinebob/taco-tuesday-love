import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDFWComponent } from './view-dfw.component';

describe('ViewDFWComponent', () => {
  let component: ViewDFWComponent;
  let fixture: ComponentFixture<ViewDFWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDFWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDFWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

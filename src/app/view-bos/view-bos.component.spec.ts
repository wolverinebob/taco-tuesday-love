import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBOSComponent } from './view-bos.component';

describe('ViewBOSComponent', () => {
  let component: ViewBOSComponent;
  let fixture: ComponentFixture<ViewBOSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBOSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

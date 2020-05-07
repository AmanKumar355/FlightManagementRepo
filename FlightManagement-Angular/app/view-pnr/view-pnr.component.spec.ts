import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPNRComponent } from './view-pnr.component';

describe('ViewPNRComponent', () => {
  let component: ViewPNRComponent;
  let fixture: ComponentFixture<ViewPNRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPNRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPNRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

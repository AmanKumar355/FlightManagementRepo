import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewScheduledflightComponent } from './view-scheduledflight.component';

describe('ViewScheduledflightComponent', () => {
  let component: ViewScheduledflightComponent;
  let fixture: ComponentFixture<ViewScheduledflightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewScheduledflightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewScheduledflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

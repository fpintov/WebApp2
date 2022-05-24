import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavWidgetComponent } from './sidenav-widget.component';

describe('SidenavWidgetComponent', () => {
  let component: SidenavWidgetComponent;
  let fixture: ComponentFixture<SidenavWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

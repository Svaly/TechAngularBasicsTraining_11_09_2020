import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageMenuGridComponent } from './landing-page-menu-grid.component';

describe('LandingPageMenuGridComponent', () => {
  let component: LandingPageMenuGridComponent;
  let fixture: ComponentFixture<LandingPageMenuGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageMenuGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageMenuGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

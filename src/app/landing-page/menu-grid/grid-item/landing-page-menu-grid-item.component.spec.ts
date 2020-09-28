import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageMenuGridItemComponent } from './landing-page-menu-grid-item.component';

describe('LandingPageMenuGridItemComponent', () => {
  let component: LandingPageMenuGridItemComponent;
  let fixture: ComponentFixture<LandingPageMenuGridItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageMenuGridItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageMenuGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

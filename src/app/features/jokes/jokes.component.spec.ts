import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesComponent } from './jokes.component';

describe('JokesComponent', () => {
  let component: JokesComponent;
  let fixture: ComponentFixture<JokesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign displayedJoke', () => {
    component.randomizeJoke();
    expect(component.displayedJoke).toBeTruthy();
  });

  it('should assign displayedJoke 2', () => {
    component.jokes = ['test'];
    component.randomizeJoke();
    expect(component.displayedJoke).toEqual('test');
  });
});

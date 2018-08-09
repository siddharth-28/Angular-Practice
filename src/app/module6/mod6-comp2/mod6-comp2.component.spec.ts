import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod6Comp2Component } from './mod6-comp2.component';

describe('Mod6Comp2Component', () => {
  let component: Mod6Comp2Component;
  let fixture: ComponentFixture<Mod6Comp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mod6Comp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mod6Comp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

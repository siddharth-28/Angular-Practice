import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod6Comp1Component } from './mod6-comp1.component';

describe('Mod6Comp1Component', () => {
  let component: Mod6Comp1Component;
  let fixture: ComponentFixture<Mod6Comp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mod6Comp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mod6Comp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

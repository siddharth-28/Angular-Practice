import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod6Comp3Component } from './mod6-comp3.component';

describe('Mod6Comp3Component', () => {
  let component: Mod6Comp3Component;
  let fixture: ComponentFixture<Mod6Comp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mod6Comp3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mod6Comp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

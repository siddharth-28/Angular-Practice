import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModComp2Component } from './mod-comp2.component';

describe('ModComp2Component', () => {
  let component: ModComp2Component;
  let fixture: ComponentFixture<ModComp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModComp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

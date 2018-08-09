import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModComp3Component } from './mod-comp3.component';

describe('ModComp3Component', () => {
  let component: ModComp3Component;
  let fixture: ComponentFixture<ModComp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModComp3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModComp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

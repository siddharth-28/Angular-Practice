import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod6Comp1Component } from './mod6-comp1/mod6-comp1.component';
import { Mod6Comp2Component } from './mod6-comp2/mod6-comp2.component';
import { Mod6Comp3Component } from './mod6-comp3/mod6-comp3.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Mod6Comp1Component, Mod6Comp2Component, Mod6Comp3Component]
})
export class Module6Module { }

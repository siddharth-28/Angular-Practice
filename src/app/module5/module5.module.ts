import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModComp1Component } from './mod-comp1/mod-comp1.component';
import { ModComp2Component } from './mod-comp2/mod-comp2.component';
import { ModComp3Component } from './mod-comp3/mod-comp3.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ModComp1Component, ModComp2Component, ModComp3Component]
})
export class Module5Module { }

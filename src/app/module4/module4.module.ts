import { Child1Component } from './parent1/child1/child1.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Parent1Component } from './parent1/parent1.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Parent1Component, Child1Component]
})
export class Module4Module { }

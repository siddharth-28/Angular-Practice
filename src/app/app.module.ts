import { ParentComponent } from './module3/parent/parent.component';
import { ChildComponent } from './module3/child/child.component';

import { Module3Module } from './module3/module3.module';
import { Comp2Component } from './module2/comp2/comp2.component';
import { Comp1Component } from './module1/comp1/comp1.component';
import { Module1Module } from './module1/module1.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { Module2Module } from './module2/module2.module';

const appRoute: Routes = [
  { path: 'module1/comp1', component: Comp1Component },
  { path: 'module2/comp2', component: Comp2Component},
  { path: 'module3/child', component: ChildComponent },
  { path: 'module3/parent', component: ParentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    Module1Module,
    Module2Module,
    Module3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

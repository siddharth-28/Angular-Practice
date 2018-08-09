import { Module5Module } from './module5/module5.module';
import { ModComp3Component } from './module5/mod-comp3/mod-comp3.component';
import { Child1Component } from './module4/parent1/child1/child1.component';
import { Parent1Component } from './module4/parent1/parent1.component';
import { ParentComponent } from './module3/parent/parent.component';
import { ChildComponent } from './module3/parent/child/child.component';

import { Module3Module } from './module3/module3.module';
import { Comp2Component } from './module2/comp2/comp2.component';
import { Comp1Component } from './module1/comp1/comp1.component';
import { Module1Module } from './module1/module1.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { Module2Module } from './module2/module2.module';
import { Module4Module } from './module4/module4.module';
import { ModComp1Component } from './module5/mod-comp1/mod-comp1.component';
import { ModComp2Component } from './module5/mod-comp2/mod-comp2.component';

const appRoute: Routes = [
  { path: 'module1/comp1', component: Comp1Component },
  { path: 'module2/comp2', component: Comp2Component},
  { path: 'module3/parent/child', component: ChildComponent },
  { path: 'module3/parent', component: ParentComponent },
  { path: 'module4/parent1', component: Parent1Component},
  { path: 'module4/parent1/child1', component: Child1Component},
  { path: 'module5/mod_comp1', component: ModComp1Component},
  { path: 'module5/mod_comp2', component: ModComp2Component},
  { path: 'module5/mod_comp2', component: ModComp3Component}
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
    Module3Module,
    Module4Module,
    Module5Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

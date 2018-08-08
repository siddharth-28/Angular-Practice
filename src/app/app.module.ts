import { Comp1Component } from './module1/comp1/comp1.component';
import { Module1Module } from './module1/module1.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';

const appRoute: Routes = [
  { path: 'module1/comp1', component: Comp1Component }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    Module1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

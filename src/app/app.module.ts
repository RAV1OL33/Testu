import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule, ArrayOfComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { ItemsModule } from "./items/items.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, } from "@angular/material/button";
import {MatSliderModule} from "@angular/material/slider";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
//TODO putt all material modules in diff file

@NgModule({
  declarations: [
    AppComponent,
    ArrayOfComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ItemsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    MatExpansionModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

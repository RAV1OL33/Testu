import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule, ArrayOfComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { ItemsModule } from "./items/items.module";

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

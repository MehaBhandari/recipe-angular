import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributeSelectorComponent } from './attribute-selector/attribute-selector.component';
import { ClassSelectorComponent } from './class-selector/class-selector.component';
import { NormalSelectorComponent } from './normal-selector/normal-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributeSelectorComponent,
    ClassSelectorComponent,
    NormalSelectorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

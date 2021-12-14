import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributeSelectorComponent } from './selectors/attribute-selector/attribute-selector.component';
import { ClassSelectorComponent } from './selectors/class-selector/class-selector.component';
import { NormalSelectorComponent } from './selectors/normal-selector/normal-selector.component';
import { SelectorLandingComponent } from './selectors/selector.landing.component';
import { RecipeComponent } from './recipe/recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributeSelectorComponent,
    ClassSelectorComponent,
    NormalSelectorComponent,
    SelectorLandingComponent,
    RecipeComponent
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

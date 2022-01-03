import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AttributeSelectorComponent } from './selectors/attribute-selector/attribute-selector.component';
import { ClassSelectorComponent } from './selectors/class-selector/class-selector.component';
import { NormalSelectorComponent } from './selectors/normal-selector/normal-selector.component';
import { SelectorLandingComponent } from './selectors/selector.landing.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ChildComponent } from './view-child/child.component';
import { ParentComponent } from './view-child/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AttributeSelectorComponent,
    ClassSelectorComponent,
    NormalSelectorComponent,
    SelectorLandingComponent,
    RecipeComponent,
    ChildComponent,
    ParentComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

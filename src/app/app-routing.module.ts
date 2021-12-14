import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {SelectorLandingComponent} from './selectors/selector.landing.component';
import { AttributeSelectorComponent } from './selectors/attribute-selector/attribute-selector.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  { path: '/', component: AppComponent },
  { path: 'attributeSelectorComponent', component: AttributeSelectorComponent },
  { path: 'selectorLandingComponent', component: SelectorLandingComponent },
  { path: 'recipeComponent', component: RecipeComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

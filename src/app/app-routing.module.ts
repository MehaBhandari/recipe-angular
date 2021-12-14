import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {SelectorLandingComponent} from './selectors/selector.landing.component';
import { AttributeSelectorComponent } from './selectors/attribute-selector/attribute-selector.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'attributeSelectorComponent', component: AttributeSelectorComponent, pathMatch: 'full' },
  { path: 'selectorLandingComponent', component: SelectorLandingComponent, pathMatch: 'full' },
  { path: 'recipeComponent', component: RecipeComponent, pathMatch: 'full' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

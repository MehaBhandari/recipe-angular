import { Component,OnInit, OnDestroy } from "@angular/core";
import { from, of} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import { RecipeService } from './recipe.service';

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html'
})

export class RecipeComponent implements OnInit, OnDestroy {
  constructor(private recipeService: RecipeService) {}
  private recipeObservable;
  public recipeList: [];
  ngOnInit() {        
  this.fetchRecipeList();
  }

  helloFunction() {
    return "Hi there"
  }

  fetchRecipeList() {
    this.recipeObservable = this.recipeService.fetchRecipeList().pipe(
      tap(console.log)
    ).subscribe((recipeListArray) => {
      this.recipeList = recipeListArray
    }
    )
  }  
  ngOnDestroy() {
    this.recipeObservable.unsubscribe();
    }
}
import { Component,OnInit, OnDestroy } from "@angular/core";
import { from, of} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html'
})

export class RecipeComponent implements OnInit, OnDestroy {
    private recipeList = [
        {
          image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/chia-pudding-280x280.jpg',
          name: 'Chia Pudding (Easy, Vegan & Healthy)',
          description: 'Chia pudding is my easy breakfast option on busy mornings. You will love this chia pudding made with coconut milk and coconut sugar.'
    
        }, {
          image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2016/08/avocado-garlic-bread-toast.jpg',
          name: 'Avocado Toast',
          description: 'Every home cook needs a good basic Avocado toast recipe for a quick, healthy, and satisfying breakfast or snack.'
    
        }, {
          image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2015/05/oats-porridge-recipe-quick.jpg',
          name: 'Oats Porridge',
          description: 'Oats porridge recipe with step by step pics – quick oats porridge made with quick-cooking oats or rolled oats.'
    
        }, {
          image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/idli-recipe-1-1024x1536.jpg',
          name: 'Idli',
          description: 'Idli is a soft, pillowy steamed savory cake made from rice and lentil batter. The lentils used in making idli are urad dal (black gram).'
    
        }, {
          image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/07/dosa-recipe-1-1024x1536.jpg',
          name: 'Dosa',
          description: 'Dosa is the ever-popular South Indian breakfast of crispy crepes made with fermented rice and lentil batter.'
    
        }, {
          image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/aloo-paratha-recipe-4.jpg',
          name: 'Aloo Paratha',
          description: 'Aloo paratha is a popular Indian breakfast of unleavened whole wheat savory and spiced potato stuffed flatbread from Punjab, India.'
    
    }];

    ngOnInit() {        
    this.fetchRecipeList();
    }
    fetchRecipeList() {
        from(this.recipeList).pipe(
          tap(console.log)
        ).subscribe(
          recipeList => recipeList
        )
    }
    
    ngOnDestroy() {
    }
}
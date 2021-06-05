import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();
	private recipes: Recipe[] = [
	    new Recipe(	
	    			'Tasty Schnitzel', 'This is simply a Schnitzel', 
	    			'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
	    			[
	    				new Ingredient('Meet', 1),
	    				new Ingredient('French Fires', 20),
	    			]
	    		),
	    new Recipe( 'Big Fat Burger', 'This is simply a Burger', 
	    			'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
	    			[
	    				new Ingredient('Burger', 2),
	    				new Ingredient('Meet', 1),
	    			]
	    		)
	];

  	constructor( private slService : ShoppingListService ) { }

  	getRecipes(){
  		return this.recipes.slice();
  	}

  	addIngredientToShoppingList(ingredients : Ingredient[]){
  		this.slService.addIngredients(ingredients);
  	}
}

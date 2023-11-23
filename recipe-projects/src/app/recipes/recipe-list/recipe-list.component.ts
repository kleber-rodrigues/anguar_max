import { Component } from '@angular/core';
import Recipe from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("A test Recipe!", "This is simple", "https://live.staticflickr.com/2395/2266080998_2ea1aa6b43_b.jpg"),
    new Recipe("Arroz com tomate", "Uma deliciosa receita de arroz com tomate para incrementar o seu almoço", "https://www.cookipedia.co.uk/wiki/images/b/bf/Rock_salmon_with_garlic_and_coriander.jpg"),
  ];

}

import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simple test', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2020/06/palak-paneer-recipe-500x500.jpg'),
    new Recipe('A Test Recipe', 'This is simple test', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2020/06/palak-paneer-recipe-500x500.jpg'),
    new Recipe('A Test Recipe', 'This is simple test', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2020/06/palak-paneer-recipe-500x500.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

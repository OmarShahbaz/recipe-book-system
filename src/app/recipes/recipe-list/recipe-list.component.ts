import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('recipe test','A demo recipe','https://img.freepik.com/free-photo/portion-mouthwatering-roasted-pork-covered-with-cider-chunky-applesauce_181624-57703.jpg?w=996&t=st=1661788587~exp=1661789187~hmac=2bbdd03552d85b2d7dc8fdf22343599a6f68d6e36b3b747b5697192d6bb2b563'),
    new Recipe('recipe test','A demo recipe','https://img.freepik.com/free-photo/portion-mouthwatering-roasted-pork-covered-with-cider-chunky-applesauce_181624-57703.jpg?w=996&t=st=1661788587~exp=1661789187~hmac=2bbdd03552d85b2d7dc8fdf22343599a6f68d6e36b3b747b5697192d6bb2b563')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeList = [
    {
      name: "Bananas Foster",
      logo: "../../assets/recipe-icons/banana.png",
      text: [
            "../../assets/recipe-icons/foster-ingredients.png",
            "../../assets/recipe-icons/foster-instructions.png"
      ]
    },
    {
      name: "Aunt Bobby's Pound Cake",
      logo: "../../assets/recipe-icons/butter.png",
      text: [
            "../../assets/recipe-icons/lb-cake-1.png",
            "../../assets/recipe-icons/lb-cake-2.png"
        ]
    },
    {
      name: "Biscuit Doughnuts",
      logo: "../../assets/recipe-icons/donut.png",
      text: [
            "../../assets/recipe-icons/Biscuit Dnuts.JPG",
            "../../assets/recipe-icons/Biscuit Dnuts img.JPG"
      ]
    },
    {
      name: "Beans for 2 People",
      logo: "../../assets/recipe-icons/beans.png",
      text: [
            "../../assets/recipe-icons/beans4-2.png"
        ]
    }
  ];

  constructor() { }

  public getRecipe():Array<{logo, name:string, text}>{
    return this.recipeList
  }
}
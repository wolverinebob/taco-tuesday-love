import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { NgbModal, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-city-view',
  templateUrl: './city-view.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./city-view.component.css']
})
export class CityViewComponent {
  closeResult: string;

  constructor(private modalService: NgbModal, public recipesService: RecipesService) { }
  
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }
  recipes;
  selectedRecipe;

  ngOnInit() {
    this.recipes = this.recipesService.getRecipe();    
  }
  public selectRecipe(choice){
    this.selectedRecipe = choice;
  }

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;
}


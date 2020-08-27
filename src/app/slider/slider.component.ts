import { Component, ViewChild, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  restaurants;
  locale;
  fortWorth;
  selectedRest;

  constructor(public dataService: DataService) { }

  ngOnInit() {
  this.fortWorth = this.dataService.getFortWorth();    
}
public selectRest(location){
  this.selectedRest = location;
}


  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;
}

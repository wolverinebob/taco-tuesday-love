import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// SLIDER IMPORTS
import { ViewChild, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-srq',
  templateUrl: './view-srq.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./view-srq.component.css']
})
export class ViewSRQComponent {
  closeResult: string;

  constructor(private modalService: NgbModal, public dataService: DataService) { }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

// EVERYTHING BELOW THIS LINE IS FOR THE SLIDER
  locale;
  selectedRest;

  // constructor(public dataService: DataService) { }

  ngOnInit() {
    this.locale = this.dataService.getSarasota();
  }
  public selectRest(location){
    this.selectedRest = location;
  }
  replaced;
  mapSearch;
  town;

  public getMap(){
    this.town = "";
    this.replaced = this.selectedRest.name.replace(/ /g, '+');
    this.mapSearch = "http://www.google.com/maps?q=";
    return this.mapSearch = this.mapSearch + this.replaced;
  }

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

}

import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// SLIDER IMPORTS
import { ViewChild, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-view-phl',
  templateUrl: './view-phl.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./view-phl.component.css']
})
export class ViewPHLComponent {
  closeResult: string;

  constructor(private modalService: NgbModal, public dataService: DataService) { }

  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }
// EVERYTHING BELOW THIS LINE IS FOR THE SLIDER
  locale;
  selectedRest;

  // constructor(public dataService: DataService) { }

  ngOnInit() {
  this.locale = this.dataService.getPhilly();
}
public selectRest(location){
  this.selectedRest = location;
}
replaced;
mapSearch;

public getMap(){
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


import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { MenuGridData } from 'app/landing-page/landing-page.component';

@Component({
  selector: 'app-landing-page-menu-grid-item',
  templateUrl: './landing-page-menu-grid-item.component.html',
  styleUrls: ['./landing-page-menu-grid-item.component.scss']
})
export class LandingPageMenuGridItemComponent implements OnInit, OnChanges {

  @Input() gridItem: MenuGridData;
  @Output() itemClicked: EventEmitter<string>;

  constructor() {
    this.itemClicked = new EventEmitter<string>();
   }

  // ngDoCheck(): void {
  //   console.log('do check');
  // }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('do check');
  }

  ngOnInit(): void {
  }

  public onItemClicked(): void {
    this.itemClicked.emit(this.gridItem.itemUrl);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { MenuGridData } from '../landing-page.component';

@Component({
  selector: 'app-landing-page-menu-grid',
  templateUrl: './landing-page-menu-grid.component.html',
  styleUrls: ['./landing-page-menu-grid.component.scss']
})
export class LandingPageMenuGridComponent implements OnInit {

  @Input() gridItems: MenuGridData[];

  constructor() { }

  ngOnInit(): void {
  }

  public onItemClicked(itemUrl: string): void {
    console.log(itemUrl);
  }
}

import { Component, OnInit, OnDestroy, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { LandingPageService } from './landing-page.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, OnDestroy, AfterViewInit {

  public title: string;
  public menuGridData: MenuGridData[];

  constructor(private landingPageService: LandingPageService) {
    this.title = 'Welcome on my new Angular site';
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.getMenuGridDataObservable();
  }

  private getMenuGridDataObservable(): void {
    this.landingPageService.getLandingMenuGridItemsObservable()
      .subscribe((results: MenuGridData[]) => {
        this.menuGridData = results;
      }, (error) => {
        console.error(error);
      }, () => {
        console.log('observable closed');
      });
  }

  private async getMenuGridDataPromise(): Promise<void> {
    try {
      this.menuGridData = await this.landingPageService.getLandingMenuGridItemsPromise();
    } catch (error) {
      console.error(error);
    } finally {
      console.log('promise resolved');
    }
  }
}

export interface MenuGridData {
  itemName: string;
  itemUrl: string;
}

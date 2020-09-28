import { Injectable } from '@angular/core';
import { MenuGridData } from './landing-page.component';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {
  public menuGridData: MenuGridData[];

  constructor() {
    this.menuGridData = [
      { itemName: 'item 11', itemUrl: 'Url 1'},
      { itemName: 'item 222', itemUrl: 'Url 2'},
      { itemName: 'item 3333', itemUrl: 'Url 3'},
      { itemName: 'item 44444', itemUrl: 'Url 4'},
      { itemName: 'item 66665', itemUrl: 'Url 5'},
     ];
  }

  public getLandingMenuGridItemsPromise(): Promise<MenuGridData[]>{
    return of(this.menuGridData).toPromise();
  }

  public getLandingMenuGridItemsObservable(): Observable<MenuGridData[]>{
    return of(this.menuGridData);
  }
}

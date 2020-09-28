import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { LandingPageHeaderComponent } from './header/landing-page-header.component';
import { LandingPageMenuGridComponent } from './menu-grid/landing-page-menu-grid.component';
import { LandingPageMenuGridItemComponent } from './menu-grid/grid-item/landing-page-menu-grid-item.component';
import { LandingPageService } from './landing-page.service';

@NgModule({
  declarations: [
    LandingPageComponent,
    LandingPageHeaderComponent,
    LandingPageMenuGridComponent,
    LandingPageMenuGridItemComponent,
    ],
  imports: [
    CommonModule
  ],
  exports: [LandingPageComponent],
  providers: [LandingPageService]
})
export class LandingPageModule { }

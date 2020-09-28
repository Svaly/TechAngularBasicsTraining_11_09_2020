import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokesModule } from './features/jokes/jokes.module';
import { FormsModule } from '@angular/forms';
import { LandingPageModule } from './landing-page/landing-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    JokesModule,
    LandingPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JokesRoutingModule } from './jokes-routing.module';
import { JokesComponent } from './jokes.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [JokesComponent],
  imports: [
    CommonModule,
    JokesRoutingModule,
    FormsModule
  ],
  exports: [JokesComponent]
})
export class JokesModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { PixabayComponent } from './pixabay/pixabay.component';
import {PixabayService} from './pixabay.service';

@NgModule({
  declarations: [
    PixabayComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PixabayService],
  bootstrap: [PixabayComponent]
})
export class AppModule { }

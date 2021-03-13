import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HoverClassModule } from 'projects/hover-class/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HoverClassModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

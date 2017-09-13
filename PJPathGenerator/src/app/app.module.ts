import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CarComponent } from './app.component';
import { KeyUpComponent_v1 } from './app.component';


import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@NgModule({
  declarations: [CarComponent, KeyUpComponent_v1
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CarComponent],
  bootstrap: [CarComponent, KeyUpComponent_v1]
})
export class AppModule {}

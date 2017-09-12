import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  Caracteristicas;

     constructor(private http: Http) {
         this.http.get('../assets/data/Caracteristicas.json')
                 .subscribe(res => this.Caracteristicas = res.json());
                 }
}
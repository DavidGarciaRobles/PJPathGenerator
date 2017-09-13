import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-key-up1',
  template: `
    <input (keyup)="onKey($event)">
  `
})
export class KeyUpComponent_v1 {
  values = '';

  /*
  onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }
  */

  onKey(event: KeyboardEvent) { // with type info
    this.values += (<HTMLInputElement>event.target).value;
  }
}


@Component({
  selector: 'app-tb-caracteristicas',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class CarComponent {
  Caracteristicas;
       constructor(private http: Http) {
           this.http.get('../assets/data/Caracteristicas.json')
                   .subscribe(res => this.Caracteristicas = res.json());
                   }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Caracteristicas;
  constructor(private http: Http) {
      this.http.get('../assets/data/Caracteristicas.json')
              .subscribe(res => this.Caracteristicas = res.json());
              }
}

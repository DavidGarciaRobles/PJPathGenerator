import { Component, Input } from '@angular/core';


@Component({
  selector: '[tb-Caracteristicas]',
  template: `<table>
              <tr *ngFor='let Car of Caracteristicas'>{{Car.Nombre}}
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>`
})
export class CarComponent {
  tabla: HTMLTableElement;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}

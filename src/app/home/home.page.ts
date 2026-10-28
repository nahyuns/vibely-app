import { Component, inject } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Publicacion } from '../services/publicacion';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent]
})
export class HomePage {
  readonly servicio = inject(Publicacion);
}

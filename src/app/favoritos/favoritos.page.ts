import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular';
import { Publicacion } from '../services/publicacion';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
  imports: [IonContent, CommonModule]
})
export class FavoritosPage {
  readonly servicio = inject(Publicacion);

  readonly favoritas = computed(() =>
    this.servicio.publicaciones().filter(publicacion => publicacion.favorita)
  );
}

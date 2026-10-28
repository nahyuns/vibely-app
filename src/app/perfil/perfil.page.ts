import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { Publicacion } from '../services/publicacion';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  imports: [IonContent, CommonModule, FormsModule, RouterLink]
})
export class PerfilPage {
  private readonly servicio = inject(Publicacion);

  nombre = 'LVS_NANA';
  usuario = '@lvs_nana';
  bio = 'creando mi propio universo ✦';
  editando = false;
  aviso = '';

  readonly cantidadPublicaciones = computed(() => this.servicio.publicaciones().length);
  readonly cantidadFavoritos = computed(() =>
    this.servicio.publicaciones().filter(publicacion => publicacion.favorita).length
  );
  readonly cantidadCategorias = computed(() =>
    new Set(this.servicio.publicaciones().map(publicacion => publicacion.categoria)).size
  );

  alternarEdicion(): void {
    this.aviso = '';
    this.editando = !this.editando;
  }

  guardarPerfil(): void {
    this.nombre = this.nombre.trim() || 'LVS_NANA';
    this.usuario = this.usuario.trim().startsWith('@')
      ? this.usuario.trim()
      : `@${this.usuario.trim() || 'lvs_nana'}`;
    this.bio = this.bio.trim();
    this.editando = false;
    this.aviso = 'Perfil actualizado.';
  }

  mostrarAviso(mensaje: string): void {
    this.aviso = mensaje;
    this.editando = false;
  }
}

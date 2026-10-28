import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular';
import { Publicacion } from '../services/publicacion';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
  imports: [IonContent, CommonModule, FormsModule]
})
export class BuscarPage {
  readonly servicio = inject(Publicacion);
  readonly textoBusqueda = signal('');
  readonly categoriaSeleccionada = signal<string | null>(null);

  readonly resultados = computed(() => {
    const consulta = this.normalizar(this.textoBusqueda().trim().replace(/^#/, ''));

    return this.servicio.publicaciones().filter(publicacion => {
      const categoria = this.categoriaSeleccionada();
      const coincideCategoria = !categoria || publicacion.categoria === categoria;
      const texto = this.normalizar(
        `${publicacion.titulo} ${publicacion.descripcion} ${publicacion.categoria}`
      );

      return coincideCategoria && (!consulta || texto.includes(consulta));
    });
  });

  buscar(texto: string): void {
    this.textoBusqueda.set(texto);
    this.categoriaSeleccionada.set(null);
  }

  seleccionarCategoria(categoria: string): void {
    this.categoriaSeleccionada.update(actual => actual === categoria ? null : categoria);
    this.textoBusqueda.set('');
  }

  buscarTendencia(tendencia: string): void {
    this.categoriaSeleccionada.set(null);
    this.textoBusqueda.set(tendencia);
  }

  private normalizar(texto: string): string {
    return texto
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLocaleLowerCase();
  }
}

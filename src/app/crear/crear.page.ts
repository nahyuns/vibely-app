import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular';
import { Router } from '@angular/router';
import { Publicacion } from '../services/publicacion';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
  imports: [IonContent, CommonModule, FormsModule]
})
export class CrearPage {
  private readonly servicio = inject(Publicacion);
  private readonly router = inject(Router);

  titulo = '';
  descripcion = '';
  categoria = '';
  imagen = '';
  nombreImagen = '';
  error = '';
  mensaje = '';

  seleccionarImagen(evento: Event): void {
    const input = evento.target as HTMLInputElement;
    const archivo = input.files?.[0];

    this.error = '';
    this.mensaje = '';

    if (!archivo) {
      return;
    }

    if (!archivo.type.startsWith('image/')) {
      this.error = 'El archivo seleccionado no es una imagen.';
      input.value = '';
      return;
    }

    if (archivo.size > 5 * 1024 * 1024) {
      this.error = 'La imagen no puede superar los 5 MB.';
      input.value = '';
      return;
    }

    const lector = new FileReader();
    lector.onload = () => {
      if (typeof lector.result !== 'string') {
        this.error = 'No se pudo leer la imagen seleccionada.';
        return;
      }

      this.imagen = lector.result;
      this.nombreImagen = archivo.name;
    };
    lector.onerror = () => {
      this.error = 'Ocurrió un error al cargar la imagen.';
    };
    lector.readAsDataURL(archivo);
  }

  async publicar(): Promise<void> {
    this.error = '';
    this.mensaje = '';

    if (!this.titulo.trim() || !this.descripcion.trim() || !this.categoria) {
      this.error = 'Completá el título, la descripción y la categoría.';
      return;
    }

    if (!this.imagen) {
      this.error = 'Elegí una imagen antes de publicar.';
      return;
    }

    this.servicio.agregar(
      this.titulo.trim(),
      this.descripcion.trim(),
      this.categoria,
      this.imagen
    );

    this.titulo = '';
    this.descripcion = '';
    this.categoria = '';
    this.imagen = '';
    this.nombreImagen = '';
    this.mensaje = '¡Tu publicación se agregó correctamente!';

    const navegacionCompletada = await this.router.navigateByUrl('/home');
    if (!navegacionCompletada) {
      this.error = 'La publicación se guardó, pero no se pudo abrir Inicio.';
    }
  }
}

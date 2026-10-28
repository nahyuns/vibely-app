import { Injectable, signal } from '@angular/core';

interface PublicacionItem {
    id: number;
    titulo: string;
    descripcion: string;
    categoria: string;
    imagen: string;
    favorita: boolean;
}

@Injectable({ providedIn: 'root' })
export class Publicacion {
    publicaciones = signal<PublicacionItem[]>([
        {
            id: 1,
            titulo: 'Adela',
            descripcion: 'Inspiración de estilo',
            categoria: 'Moda',
            imagen: 'assets/adela.jpg',
            favorita: false
        },
        {
            id: 2,
            titulo: 'Karina',
            descripcion: 'Inspiración de estilo',
            categoria: 'Fotografía',
            imagen: 'assets/karina.jpg',
            favorita: false
        },
        {
            id: 3,
            titulo: 'Björk',
            descripcion: 'Inspiración musical',
            categoria: 'Música',
            imagen: 'assets/bjork.jpg',
            favorita: false
        },
        {
            id: 4,
            titulo: 'Lara',
            descripcion: 'Inspiración de estilo',
            categoria: 'Inspiración',
            imagen: 'assets/lara.jpg',
            favorita: false
        },
        {
            id: 5,
            titulo: 'Hyunjin',
            descripcion: 'Inspiración artística',
            categoria: 'Arte',
            imagen: 'assets/Hyunjin.jpg',
            favorita: false
        },
        {
            id: 6,
            titulo: 'Scaloneta',
            descripcion: 'Momentos para recordar',
            categoria: 'Deportes',
            imagen: 'assets/scaloneta.jpg',
            favorita: false
        },
        {
            id: 7,
            titulo: 'Zara Pink',
            descripcion: 'Inspiración de moda',
            categoria: 'Moda',
            imagen: 'assets/zarapink.jpg',
            favorita: false
        },
        {
            id: 8,
            titulo: 'Lara en rosa',
            descripcion: 'Inspiración de estilo',
            categoria: 'Moda',
            imagen: 'assets/lara2.jpg',
            favorita: false
        },
        {
            id: 9,
            titulo: 'Adela en escena',
            descripcion: 'Inspiración musical',
            categoria: 'Música',
            imagen: 'assets/adela2.jpg',
            favorita: false
        },
        {
            id: 10,
            titulo: 'Adela',
            descripcion: 'Retrato de inspiración',
            categoria: 'Fotografía',
            imagen: 'assets/adela3.jpg',
            favorita: false
        },
        {
            id: 11,
            titulo: 'Flor',
            descripcion: 'Inspiración floral',
            categoria: 'Arte',
            imagen: 'assets/flor.jpg',
            favorita: false
        },
        {
            id: 12,
            titulo: 'Doja',
            descripcion: 'Inspiración musical',
            categoria: 'Música',
            imagen: 'assets/doja.jpg',
            favorita: false
        }
    ]);

    agregar(titulo: string, descripcion: string,
        categoria: string, imagen: string) {

        const nuevaPublicacion: PublicacionItem = {
            id: Date.now(),
            titulo: titulo,
            descripcion: descripcion,
            categoria: categoria,
            imagen: imagen,
            favorita: false
        };

        this.publicaciones.update(lista => [
            nuevaPublicacion,
            ...lista
        ]);
    }

    cambiarFavorito(id: number) {
        this.publicaciones.update(lista =>
            lista.map(publicacion =>
                publicacion.id === id
                    ? {
                        ...publicacion,
                        favorita: !publicacion.favorita
                    }
                    : publicacion
            )
        );
    }
}

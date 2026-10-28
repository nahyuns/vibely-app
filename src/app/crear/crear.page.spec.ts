import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CrearPage } from './crear.page';
import { Publicacion } from '../services/publicacion';

describe('CrearPage', () => {
  let component: CrearPage;
  let fixture: ComponentFixture<CrearPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter([{ path: 'home', component: CrearPage }])]
    });
    fixture = TestBed.createComponent(CrearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not publish without an image', () => {
    const cantidadInicial = TestBed.inject(Publicacion).publicaciones().length;
    component.titulo = 'Nueva idea';
    component.descripcion = 'Una descripción';
    component.categoria = 'Arte';

    component.publicar();

    expect(component.error).toContain('Elegí una imagen');
    expect(TestBed.inject(Publicacion).publicaciones()).toHaveLength(cantidadInicial);
  });

  it('should add a valid publication and navigate to home', async () => {
    component.titulo = '  Nueva idea  ';
    component.descripcion = '  Una descripción  ';
    component.categoria = 'Arte';
    component.imagen = 'data:image/png;base64,aGVsbG8=';

    await component.publicar();

    const publicacion = TestBed.inject(Publicacion).publicaciones()[0];
    expect(publicacion.titulo).toBe('Nueva idea');
    expect(publicacion.descripcion).toBe('Una descripción');
    expect(publicacion.categoria).toBe('Arte');
    expect(publicacion.imagen).toBe('data:image/png;base64,aGVsbG8=');
    expect(component.mensaje).toContain('correctamente');
    expect(component.titulo).toBe('');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PerfilPage } from './perfil.page';

describe('PerfilPage', () => {
  let component: PerfilPage;
  let fixture: ComponentFixture<PerfilPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter([])]
    });
    fixture = TestBed.createComponent(PerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show publication and favorite counts from the shared service', () => {
    expect(component.cantidadPublicaciones()).toBe(6);
    expect(component.cantidadFavoritos()).toBe(0);
  });

  it('should save edited profile details', () => {
    component.alternarEdicion();
    component.nombre = ' Nana ';
    component.usuario = 'nana';
    component.bio = '  Mi perfil  ';

    component.guardarPerfil();

    expect(component.nombre).toBe('Nana');
    expect(component.usuario).toBe('@nana');
    expect(component.bio).toBe('Mi perfil');
    expect(component.editando).toBe(false);
  });
});

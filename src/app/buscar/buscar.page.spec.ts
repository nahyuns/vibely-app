import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscarPage } from './buscar.page';

describe('BuscarPage', () => {
  let component: BuscarPage;
  let fixture: ComponentFixture<BuscarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter publications by text without matching accents or case', () => {
    component.buscar('BJORK');

    expect(component.resultados().map(publicacion => publicacion.titulo)).toEqual(['Björk']);
  });

  it('should filter by category and clear the filter when selected again', () => {
    component.seleccionarCategoria('Música');

    expect(component.resultados().map(publicacion => publicacion.titulo)).toEqual(['Björk']);

    component.seleccionarCategoria('Música');

    expect(component.resultados()).toHaveLength(6);
  });
});

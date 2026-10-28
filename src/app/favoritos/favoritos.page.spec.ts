import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoritosPage } from './favoritos.page';

declare function describe(description: string, specDefinitions: () => void): void;
declare function beforeEach(action: () => void): void;
declare function it(description: string, testFunction: () => void): void;
declare function expect(actual: unknown): { toBeTruthy(): void };

describe('FavoritosPage', () => {
  let component: FavoritosPage;
  let fixture: ComponentFixture<FavoritosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

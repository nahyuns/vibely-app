import { TestBed } from '@angular/core/testing';

import { Publicacion } from './publicacion';

const { describe, beforeEach, it, expect } = globalThis as typeof globalThis & {
  describe: (description: string, specDefinitions: () => void) => void;
  beforeEach: (action: () => void) => void;
  it: (description: string, testFunction: () => void) => void;
  expect: (actual: unknown) => { toBeTruthy: () => void };
};

describe('Publicacion', () => {
  let service: Publicacion;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Publicacion);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePage } from './home.page';

declare function describe(description: string, specDefinitions: () => void): void;
declare function beforeEach(action: () => void | Promise<void>): void;
declare function it(description: string, spec: () => void | Promise<void>): void;
declare function expect<T>(actual: T): { toBeTruthy(): void };

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

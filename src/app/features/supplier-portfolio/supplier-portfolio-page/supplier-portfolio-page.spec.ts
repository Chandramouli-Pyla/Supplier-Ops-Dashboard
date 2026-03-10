import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierPortfolio } from './supplier-portfolio-page';

describe('SupplierPortfolio', () => {
  let component: SupplierPortfolio;
  let fixture: ComponentFixture<SupplierPortfolio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierPortfolio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierPortfolio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

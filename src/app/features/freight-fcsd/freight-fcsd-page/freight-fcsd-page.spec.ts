import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightFcsdPage } from './freight-fcsd-page';

describe('FreightFcsdPage', () => {
  let component: FreightFcsdPage;
  let fixture: ComponentFixture<FreightFcsdPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreightFcsdPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreightFcsdPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

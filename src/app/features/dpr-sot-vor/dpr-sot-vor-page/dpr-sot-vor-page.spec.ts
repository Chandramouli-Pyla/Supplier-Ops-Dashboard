import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DprSotVorPage } from './dpr-sot-vor-page';

describe('DprSotVorPage', () => {
  let component: DprSotVorPage;
  let fixture: ComponentFixture<DprSotVorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DprSotVorPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DprSotVorPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhocPage } from './adhoc-page';

describe('AdhocPage', () => {
  let component: AdhocPage;
  let fixture: ComponentFixture<AdhocPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdhocPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdhocPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

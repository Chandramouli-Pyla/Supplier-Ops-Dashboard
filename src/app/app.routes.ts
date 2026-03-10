import { Routes } from '@angular/router';
import { Shell } from './layout/shell/shell';
import { DprSotVorPage } from './features/dpr-sot-vor/dpr-sot-vor-page/dpr-sot-vor-page';
import { FreightFcsdPage } from './features/freight-fcsd/freight-fcsd-page/freight-fcsd-page';
import { SupplierPortfolioPage } from './features/supplier-portfolio/supplier-portfolio-page/supplier-portfolio-page';
import { AdhocPage } from './features/adhoc/adhoc-page/adhoc-page';

export const routes: Routes = [
  {
    path: '',
    component: Shell,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dpr-sot-vor' },
      { path: 'dpr-sot-vor', component: DprSotVorPage },
      { path: 'freight-fcsd', component: FreightFcsdPage },
      { path: 'supplier-portfolio',component: SupplierPortfolioPage },
      { path: 'adhoc', component: AdhocPage },
    ],
  },
];
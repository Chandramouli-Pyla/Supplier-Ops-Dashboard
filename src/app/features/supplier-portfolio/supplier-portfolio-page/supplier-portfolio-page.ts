import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SUPPLIER_PORTFOLIO_SNAPSHOT,
  SupplierPortfolioSnapshot,
  TrendPoint,
} from '../data/supplier-portfolio.mock';

@Component({
  selector: 'app-supplier-portfolio-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './supplier-portfolio-page.html',
  styleUrl: './supplier-portfolio-page.scss',
})
export class SupplierPortfolioPage {
  snapshot = signal<SupplierPortfolioSnapshot>(SUPPLIER_PORTFOLIO_SNAPSHOT);

  selectedSite = signal<string>('G2811');
  selectedSupplierRegion = signal<string>('North America Flag');

  pageTitle = computed(() => {
    const s = this.snapshot();
    return `${s.siteCode} | ${s.supplier}`;
  });

  addressLine = computed(() => {
    const s = this.snapshot();
    return `Site Address: ${s.address}    country: ${s.country} | Postal Code: ${s.postalCode}`;
  });

  segmentBannerClass = computed(() => {
    const segment = this.snapshot().segmentStatus.toLowerCase();
    return `segment-${segment}`;
  });

  releaseRows = computed(() => this.snapshot().releaseVsRequired);

  sotTiles = computed(() => {
    const s = this.snapshot().sotBreakdown;
    return [
      { label: 'Reactive', value: s.reactive, cls: 'blue' },
      { label: 'Red', value: s.red, cls: 'red' },
      { label: 'Yellow', value: s.yellow, cls: 'yellow' },
      { label: 'Green', value: s.green, cls: 'green' },
      { label: 'Closed', value: s.closed, cls: 'slate' },
      { label: 'Proactive', value: s.proactive, cls: 'gray' },
    ];
  });

  plantTiles = computed(() => {
    const p = this.snapshot().plantBreakdown;
    return [
      { label: 'VO', value: p.vo },
      { label: 'PTO', value: p.pto },
      { label: 'Other', value: p.other },
    ];
  });

  trendChart = computed(() => this.snapshot().trendChart);

  chartMax = computed(() => {
    return Math.max(...this.trendChart().map(x => x.supplierRisk), 5);
  });

  barHeight(point: TrendPoint): string {
    return `${(point.supplierRisk / this.chartMax()) * 110}px`;
  }

  lineBottom(value: number): string {
    return `${(value / this.chartMax()) * 110}px`;
  }

  segmentClass(level: TrendPoint['segmentLevel']): string {
    return `seg-${level}`;
  }

  summary1 = computed(() => this.snapshot().summaryRow1);
  summary2 = computed(() => this.snapshot().summaryRow2);
  summary3 = computed(() => this.snapshot().summaryRow3);

  productPortfolio = computed(() => this.snapshot().productPortfolio);
}
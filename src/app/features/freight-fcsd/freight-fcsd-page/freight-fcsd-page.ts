import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FREIGHT_RECORDS, FreightRecord } from '../data/freight-fcsd.mock';
import { MatChipOption, MatChipListbox } from "@angular/material/chips";

type YearKey = 2024 | 2025 | 2026;

type FreightTableRow = {
  siteCode: string;
  vhm: string;

  qty2024: number;
  amount2024: number;

  qty2025: number;
  amount2025: number;

  qty2026: number;
  amount2026: number;
};

@Component({
  selector: 'app-freight-fcsd-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CurrencyPipe,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatDialogModule,
    MatChipOption,
    MatChipListbox
],
  templateUrl: './freight-fcsd-page.html',
  styleUrl: './freight-fcsd-page.scss',
})
export class FreightFcsdPage {
  private dialog = inject(MatDialog);

  records = signal<FreightRecord[]>(FREIGHT_RECORDS);

  selectedVhm = signal<string>('ALL');
  selectedSite = signal<string>('ALL');
  selectedFreightMonth = signal<string>('ALL');
  selectedDprMonth = signal<string>('ALL');

  selectedPartNumber = signal<string>('ALL');
  selectedShipYear = signal<'ALL' | YearKey>('ALL');


  pickVhm(v: string) {
  this.selectedVhm.set(v);
  this.selectedSite.set('ALL');
  this.selectedPartNumber.set('ALL');
}

pickSite(site: string) {
  this.selectedSite.set(site);
  this.selectedPartNumber.set('ALL');
}

  vhmOptions = computed(() => {
    const values = Array.from(new Set(this.records().map(r => r.vhm))).sort();
    return ['ALL', ...values];
  });

  siteOptions = computed(() => {
    const vhm = this.selectedVhm();
    const base = this.records().filter(r => vhm === 'ALL' || r.vhm === vhm);
    const values = Array.from(new Set(base.map(r => r.siteCode))).sort();
    return ['ALL', ...values];
  });

  freightMonthOptions = computed(() => {
    const values = Array.from(new Set(this.records().map(r => r.freightMonth))).sort();
    return ['ALL', ...values];
  });

  dprMonthOptions = computed(() => {
    const values = Array.from(new Set(this.records().map(r => r.dprMonth))).sort();
    return ['ALL', ...values];
  });

  shipYearOptions: Array<'ALL' | YearKey> = ['ALL', 2024, 2025, 2026];

  baseFilteredRecords = computed(() => {
    const vhm = this.selectedVhm();
    const site = this.selectedSite();
    const freightMonth = this.selectedFreightMonth();
    const dprMonth = this.selectedDprMonth();

    return this.records().filter(r => {
      const vhmOk = vhm === 'ALL' || r.vhm === vhm;
      const siteOk = site === 'ALL' || r.siteCode === site;
      const freightOk = freightMonth === 'ALL' || r.freightMonth === freightMonth;
      const dprOk = dprMonth === 'ALL' || r.dprMonth === dprMonth;

      return vhmOk && siteOk && freightOk && dprOk;
    });
  });

  partNumberOptions = computed(() => {
    const values = Array.from(new Set(this.baseFilteredRecords().map(r => r.partNumber))).sort();
    return ['ALL', ...values];
  });

  finalRecords = computed(() => {
    const partNumber = this.selectedPartNumber();
    const shipYear = this.selectedShipYear();

    return this.baseFilteredRecords().filter(r => {
      const partOk = partNumber === 'ALL' || r.partNumber === partNumber;
      const yearOk = shipYear === 'ALL' || r.shipYear === shipYear;
      return partOk && yearOk;
    });
  });

  tableRows = computed<FreightTableRow[]>(() => {
    const map = new Map<string, FreightTableRow>();

    for (const r of this.finalRecords()) {
      const key = `${r.siteCode}__${r.vhm}`;

      if (!map.has(key)) {
        map.set(key, {
          siteCode: r.siteCode,
          vhm: r.vhm,

          qty2024: 0,
          amount2024: 0,

          qty2025: 0,
          amount2025: 0,

          qty2026: 0,
          amount2026: 0,
        });
      }

      const row = map.get(key)!;

      if (r.shipYear === 2024) {
        row.qty2024 += r.qty;
        row.amount2024 += r.totalAmount;
      }

      if (r.shipYear === 2025) {
        row.qty2025 += r.qty;
        row.amount2025 += r.totalAmount;
      }

      if (r.shipYear === 2026) {
        row.qty2026 += r.qty;
        row.amount2026 += r.totalAmount;
      }
    }

    return Array.from(map.values());
  });

  yearlyTotals = computed(() => {
    let qty2024 = 0, amount2024 = 0;
    let qty2025 = 0, amount2025 = 0;
    let qty2026 = 0, amount2026 = 0;

    for (const r of this.finalRecords()) {
      if (r.shipYear === 2024) {
        qty2024 += r.qty;
        amount2024 += r.totalAmount;
      }
      if (r.shipYear === 2025) {
        qty2025 += r.qty;
        amount2025 += r.totalAmount;
      }
      if (r.shipYear === 2026) {
        qty2026 += r.qty;
        amount2026 += r.totalAmount;
      }
    }

    return {
      qty2024,
      amount2024,
      qty2025,
      amount2025,
      qty2026,
      amount2026,
    };
  });

  chartBars = computed(() => {
    const totals = this.yearlyTotals();
    const max = Math.max(totals.qty2024, totals.qty2025, totals.qty2026, 1);

    return [
      {
        year: '2024',
        value: totals.qty2024,
        height: `${(totals.qty2024 / max) * 180}px`,
      },
      {
        year: '2025',
        value: totals.qty2025,
        height: `${(totals.qty2025 / max) * 180}px`,
      },
      {
        year: '2026',
        value: totals.qty2026,
        height: `${(totals.qty2026 / max) * 180}px`,
      },
    ];
  });

  totalRecords = computed(() => this.finalRecords().length);

  totalSites = computed(() => {
    return new Set(this.finalRecords().map(r => r.siteCode)).size;
  });

  totalAmount = computed(() => {
    return this.finalRecords().reduce((sum, r) => sum + r.totalAmount, 0);
  });

  toggleFreightMonth(month: string) {
  this.selectedFreightMonth.set(this.selectedFreightMonth() === month ? 'ALL' : month);
}

toggleDprMonth(month: string) {
  this.selectedDprMonth.set(this.selectedDprMonth() === month ? 'ALL' : month);
}
  clearFilters() {
    this.selectedVhm.set('ALL');
    this.selectedSite.set('ALL');
    this.selectedFreightMonth.set('ALL');
    this.selectedDprMonth.set('ALL');
    this.selectedPartNumber.set('ALL');
    this.selectedShipYear.set('ALL');
  }

  openExpandedTable() {
    this.dialog.open(FreightExpandedTableDialog, {
      width: '1200px',
      maxWidth: 'calc(100vw - 40px)',
      height: '80vh',
      data: {
        rows: this.tableRows(),
        selectedVhm: this.selectedVhm(),
        selectedSite: this.selectedSite(),
        selectedFreightMonth: this.selectedFreightMonth(),
        selectedDprMonth: this.selectedDprMonth(),
        selectedPartNumber: this.selectedPartNumber(),
        selectedShipYear: this.selectedShipYear(),
      },
    });
  }
}

@Component({
  selector: 'app-freight-expanded-table-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatDividerModule, CurrencyPipe],
  template: `
    <div class="dlg-head">
      <div class="dlg-title">Premium Freight Data (Expanded)</div>
      <button mat-stroked-button mat-dialog-close>
        <mat-icon>close</mat-icon>
        Close
      </button>
    </div>

    <div class="dlg-sub">
      <span class="pill">VHM: {{ data.selectedVhm }}</span>
      <span class="pill">Site: {{ data.selectedSite }}</span>
      <span class="pill">Freight Month: {{ data.selectedFreightMonth }}</span>
      <span class="pill">DPR Month: {{ data.selectedDprMonth }}</span>
      <span class="pill">Part: {{ data.selectedPartNumber }}</span>
      <span class="pill">Ship Year: {{ data.selectedShipYear }}</span>
    </div>

    <mat-divider></mat-divider>

    <div class="dlg-body">
      <table class="qlik-table">
        <thead>
          <tr>
            <th rowspan="2">Site</th>
            <th rowspan="2">VHM</th>
            <th colspan="2">2024</th>
            <th colspan="2">2025</th>
            <th colspan="2">2026</th>
          </tr>
          <tr>
            <th>Qty</th>
            <th>Tot Amt</th>
            <th>Qty</th>
            <th>Tot Amt</th>
            <th>Qty</th>
            <th>Tot Amt</th>
          </tr>
        </thead>

        <tbody>
          <tr *ngFor="let r of data.rows">
            <td>{{ r.siteCode }}</td>
            <td>{{ r.vhm }}</td>
            <td>{{ r.qty2024 }}</td>
            <td>{{ r.amount2024 | currency:'USD':'symbol':'1.0-0' }}</td>
            <td>{{ r.qty2025 }}</td>
            <td>{{ r.amount2025 | currency:'USD':'symbol':'1.0-0' }}</td>
            <td>{{ r.qty2026 }}</td>
            <td>{{ r.amount2026 | currency:'USD':'symbol':'1.0-0' }}</td>
          </tr>

          <tr *ngIf="data.rows.length === 0">
            <td colspan="8" class="empty">No rows match the current filters.</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [`
    .dlg-head{
      display:flex;align-items:center;justify-content:space-between;
      padding:12px 14px;
    }
    .dlg-title{font-weight:900;font-size:16px;}
    .dlg-sub{
      padding:0 14px 12px 14px;
      display:flex;gap:10px;align-items:center;flex-wrap:wrap;
    }
    .pill{
      background:#e8f0fe;border-radius:14px;padding:4px 10px;font-weight:700;
    }
    .dlg-body{ padding:14px; overflow:auto; height:calc(80vh - 120px); }
    .qlik-table{
      width:100%; border-collapse:collapse; font-size:13px;
      border:1px solid #e6e6e6; border-radius:8px; overflow:hidden;
    }
    .qlik-table th{
      background:#0f3d78;color:#fff;text-align:left;
      padding:10px;border-bottom:1px solid #0a2f5f;
      white-space:nowrap;
    }
    .qlik-table td{
      padding:10px;border-bottom:1px solid #eee;
    }
    .empty{ text-align:center; padding:20px; color:#666; }
  `]
})
export class FreightExpandedTableDialog {
  data = inject(MAT_DIALOG_DATA) as {
    rows: FreightTableRow[];
    selectedVhm: string;
    selectedSite: string;
    selectedFreightMonth: string;
    selectedDprMonth: string;
    selectedPartNumber: string;
    selectedShipYear: string;
  };
}
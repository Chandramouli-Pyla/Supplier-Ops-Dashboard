import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { SOT_CASES } from '../data/sot.mock'; 

type CaseType = 'Proactive' | 'Reactive';
type SotStatus = 'Green' | 'Yellow' | 'Red';

type SotCase = {
  week: string;
  supplier: string;
  siteCode: string;
  supplierRegion: string,
  staVhm: string;
  caseType: CaseType;
  delayDays?: number;
  activeSite: boolean;

  // optional for future
  isClosed?: boolean;
};

type TableRow = {
  siteCode: string;
  staVhm: string;
  caseType: CaseType;
  open: number;
  red: number;
  yellow: number;
  green: number;
  closed: number;
};

@Component({
  selector: 'app-dpr-sot-vor-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,

    // Material
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatChipsModule,
    MatDividerModule,
    MatDialogModule,
  ],
  templateUrl: './dpr-sot-vor-page.html',
  styleUrl: './dpr-sot-vor-page.scss',
})
export class DprSotVorPage {
  private dialog = inject(MatDialog);

  // =========================
  // DATA
  // =========================
  cases = signal<SotCase[]>(SOT_CASES as unknown as SotCase[]);

  // =========================
  // LEFT FILTERS
  // =========================
  selectedWeek = signal<string>('ALL');
  selectedRegion = signal<string>('ALL');
  selectedStatus = signal<'ALL' | SotStatus>('ALL');

  // =========================
  // COLUMN FILTERS (Qlik-like)
  // =========================
  selectedSite = signal<string>('ALL');
  selectedStaVhm = signal<string>('ALL');
  selectedCaseType = signal<'ALL' | CaseType>('ALL');

  // =========================
  // UTIL: delay -> status
  // =========================
  statusFromDelay(delayDays?: number): SotStatus {
    if (delayDays === undefined || delayDays === null) return 'Green';
    if (delayDays <= 2) return 'Green';
    if (delayDays <= 5) return 'Yellow';
    return 'Red';
  }

  // =========================
  // LEFT FILTER OPTIONS
  // =========================
  weekOptions = computed(() => {
    const weeks = Array.from(new Set(this.cases().map((c) => c.week))).sort();
    return ['ALL', ...weeks];
  });

  regionOptions = computed(() => {
    const regions = Array.from(new Set(this.cases().map((c) => c.supplierRegion))).sort();
    return ['ALL', ...regions];
  });

  statusOptions: Array<'ALL' | SotStatus> = ['ALL', 'Green', 'Yellow', 'Red'];

  // =========================
  // BASE FILTER (week + supplier + status)
  // =========================
  filteredCases = computed(() => {
    const week = this.selectedWeek();
    const region = this.selectedRegion();
    const status = this.selectedStatus();

    return this.cases().filter((c) => {
      const weekOk = week === 'ALL' || c.week === week;
      const regionOk = region === 'ALL' || c.supplierRegion === region;
      const statusOk = status === 'ALL' || this.statusFromDelay(c.delayDays) === status;
      return weekOk && regionOk && statusOk;
    });
  });

  // =========================
  // MENU OPTIONS (based on filtered)
  // =========================
  availableSites = computed(() => {
    const sites = Array.from(new Set(this.filteredCases().map((c) => c.siteCode))).sort();
    return ['ALL', ...sites];
  });

  availableStaVhms = computed(() => {
    const site = this.selectedSite();
    const base = this.filteredCases().filter((c) => site === 'ALL' || c.siteCode === site);
    const stas = Array.from(new Set(base.map((c) => c.staVhm))).sort();
    return ['ALL', ...stas];
  });

  // =========================
  // FINAL FILTER
  // =========================
  finalCases = computed(() => {
    const siteSel = this.selectedSite();
    const staSel = this.selectedStaVhm();
    const typeSel = this.selectedCaseType();

    return this.filteredCases().filter((c) => {
      const siteOk = siteSel === 'ALL' || c.siteCode === siteSel;
      const staOk = staSel === 'ALL' || c.staVhm === staSel;
      const typeOk = typeSel === 'ALL' || c.caseType === typeSel;
      return siteOk && staOk && typeOk;
    });
  });

  // =========================
  // TABLE ROWS (group by site+sta+type)
  // =========================
  tableRows = computed<TableRow[]>(() => {
    const map = new Map<string, TableRow>();

    for (const c of this.finalCases()) {
      const key = `${c.siteCode}__${c.staVhm}__${c.caseType}`;

      if (!map.has(key)) {
        map.set(key, {
          siteCode: c.siteCode,
          staVhm: c.staVhm,
          caseType: c.caseType,
          open: 0,
          red: 0,
          yellow: 0,
          green: 0,
          closed: 0,
        });
      }

      const row = map.get(key)!;

      // closed logic (optional field)
      if (c.isClosed) {
        row.closed++;
        continue;
      }

      // open (everything not closed)
      row.open++;

      const s = this.statusFromDelay(c.delayDays);
      if (s === 'Green') row.green++;
      if (s === 'Yellow') row.yellow++;
      if (s === 'Red') row.red++;
    }

    return Array.from(map.values());
  });

  // =========================
  // KPI / SUMMARY
  // =========================
  totalCases = computed(() => this.finalCases().length);

  activeSitesCount = computed(() => {
    const set = new Set<string>();
    for (const c of this.finalCases()) if (c.activeSite) set.add(c.siteCode);
    return set.size;
  });

  inactiveSitesCount = computed(() => {
    const set = new Set<string>();
    for (const c of this.finalCases()) if (!c.activeSite) set.add(c.siteCode);
    return set.size;
  });

  // chart counts (simple)
  counts = computed(() => {
    let open = 0, red = 0, yellow = 0, green = 0, closed = 0;

    for (const c of this.finalCases()) {
      if (c.isClosed) {
        closed++;
        continue;
      }
      open++;
      const s = this.statusFromDelay(c.delayDays);
      if (s === 'Red') red++;
      if (s === 'Yellow') yellow++;
      if (s === 'Green') green++;
    }

    return { open, red, yellow, green, closed, total: open + closed };
  });

  // =========================
  // MENU pickers
  // =========================
  pickSite(v: string) {
    this.selectedSite.set(v);
    this.selectedStaVhm.set('ALL');
  }

  pickSta(v: string) {
    this.selectedStaVhm.set(v);
  }

  pickCaseType(v: 'ALL' | CaseType) {
    this.selectedCaseType.set(v);
  }

  clearColumnFilters() {
    this.selectedSite.set('ALL');
    this.selectedStaVhm.set('ALL');
    this.selectedCaseType.set('ALL');
  }

  // =========================
  // EXPAND TABLE (Qlik-like)
  // =========================
  openExpandedTable() {
    this.dialog.open(SotExpandedTableDialog, {
      width: '1100px',
      maxWidth: 'calc(100vw - 40px)',
      height: '80vh',
      data: {
        rows: this.tableRows(),
        selectedSite: this.selectedSite(),
        selectedSta: this.selectedStaVhm(),
        selectedType: this.selectedCaseType(),
      },
    });
  }
}

// =======================================================
// Dialog Component: Expanded table view
// =======================================================
@Component({
  selector: 'app-sot-expanded-table-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatDividerModule],
  template: `
    <div class="dlg-head">
      <div class="dlg-title">SOT Table (Expanded)</div>
      <button mat-stroked-button mat-dialog-close>
        <mat-icon>close</mat-icon>
        Close
      </button>
    </div>

    <div class="dlg-sub">
      <span><b>Selected:</b></span>
      <span class="pill">Site: {{ data.selectedSite }}</span>
      <span class="pill">STA: {{ data.selectedSta }}</span>
      <span class="pill">Type: {{ data.selectedType }}</span>
    </div>

    <mat-divider></mat-divider>

    <div class="dlg-body">
      <table class="qlik-table">
        <thead>
          <tr>
            <th>Site</th>
            <th>STA VHM</th>
            <th>Case Type</th>
            <th>Open<br/>Cases</th>
            <th>Red<br/>Cases</th>
            <th>Yellow<br/>Cases</th>
            <th>Green<br/>Cases</th>
            <th>Closed<br/>Cases</th>
          </tr>
        </thead>

        <tbody>
          <tr *ngFor="let r of data.rows">
            <td>{{ r.siteCode }}</td>
            <td>{{ r.staVhm }}</td>
            <td>{{ r.caseType }}</td>
            <td>{{ r.open }}</td>
            <td>{{ r.red }}</td>
            <td>{{ r.yellow }}</td>
            <td>{{ r.green }}</td>
            <td>{{ r.closed }}</td>
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
export class SotExpandedTableDialog {
  data = inject(MAT_DIALOG_DATA) as {
    rows: TableRow[];
    selectedSite: string;
    selectedSta: string;
    selectedType: string;
  };
}
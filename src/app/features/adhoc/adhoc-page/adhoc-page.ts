import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ADHOC_FILTER_PANELS,
  ADHOC_SELECTED_ITEMS,
  ADHOC_TABLE_ROWS,
  AdhocFilterPanel,
  AdhocTableRow,
} from '../data/adhoc-mock';

type PanelKey =
  | 'release'
  | 'behind'
  | 'delivery'
  | 'commercial'
  | 'q1msa'
  | 'premium'
  | 'sot'
  | 'q1';

@Component({
  selector: 'app-adhoc-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adhoc-page.html',
  styleUrl: './adhoc-page.scss',
})
export class AdhocPage {
  panels = signal<AdhocFilterPanel[]>(ADHOC_FILTER_PANELS);
  tableRows = signal<AdhocTableRow[]>(ADHOC_TABLE_ROWS);

  selectedSiteCode = signal('G2811');
  selectedSiteNorthAmerica = signal('Site_NorthAmerica_...');
  selectedBinNum = signal('bin_num');

  selectedByPanel = signal<Record<PanelKey, string[]>>({
    release: [...ADHOC_SELECTED_ITEMS.release],
    behind: [...ADHOC_SELECTED_ITEMS.behind],
    delivery: [...ADHOC_SELECTED_ITEMS.delivery],
    commercial: [...ADHOC_SELECTED_ITEMS.commercial],
    q1msa: [...ADHOC_SELECTED_ITEMS.q1msa],
    premium: [...ADHOC_SELECTED_ITEMS.premium],
    sot: [...ADHOC_SELECTED_ITEMS.sot],
    q1: [...ADHOC_SELECTED_ITEMS.q1],
  });

  panelCount(panelKey: PanelKey): number {
    return this.selectedByPanel()[panelKey].length;
  }

  isSelected(panelKey: PanelKey, item: string): boolean {
    return this.selectedByPanel()[panelKey].includes(item);
  }

  toggleItem(panelKey: PanelKey, item: string): void {
    const current = this.selectedByPanel();
    const items = current[panelKey];

    const nextItems = items.includes(item)
      ? items.filter(x => x !== item)
      : [...items, item];

    this.selectedByPanel.set({
      ...current,
      [panelKey]: nextItems,
    });
  }

  clearPanel(panelKey: PanelKey): void {
    const current = this.selectedByPanel();
    this.selectedByPanel.set({
      ...current,
      [panelKey]: [],
    });
  }

  showResultTable = computed(() => {
    const values = Object.values(this.selectedByPanel());
    return values.some(arr => arr.length > 0);
  });

  selectedChips = computed(() => {
    const selected = this.selectedByPanel();

    const chips: Array<{ label: string; value: string }> = [
      { label: 'Site_NorthAmerica_...', value: '1' },
      { label: 'bin_num', value: '12' },
      { label: 'Site_Code', value: this.selectedSiteCode() },
    ];

    if (selected.behind.length) {
      chips.push({ label: 'Behind_Metric', value: `${selected.behind.length} of 11` });
    }

    if (selected.release.length) {
      chips.push({ label: 'RELEASE_TITLE', value: `${selected.release.length} of 19` });
    }

    if (selected.delivery.length) {
      chips.push({ label: 'DPR_NAME', value: `${selected.delivery.length} selected` });
    }

    if (selected.commercial.length) {
      chips.push({ label: 'COMMERCIAL_NAME', value: `${selected.commercial.length} selected` });
    }

    if (selected.q1.length) {
      chips.push({ label: 'Q1_NAME', value: `${selected.q1.length} selected` });
    }

    return chips;
  });

  tableSummary = computed(() => {
    const rowCount = this.tableRows().length;
    return {
      totalSotSites: rowCount,
      segmentSites: 1,
      adhocSites: rowCount,
      dprSites: 1,
      premiumSites: 1,
    };
  });

  getSelectedItems(key: string): string[] {
    const selected = this.selectedByPanel();

    if (key === 'release') return selected.release;
    if (key === 'premium') return selected.premium;
    if (key === 'sot') return selected.sot;
    if (key === 'q1') return selected.q1;

    return [];
  }

  hasSelectedItems(key: string): boolean {
    return this.getSelectedItems(key).length > 0;
  }
}
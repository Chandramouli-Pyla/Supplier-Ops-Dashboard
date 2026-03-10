export type AdhocFilterPanel = {
  key: string;
  title: string;
  countLabel: string;
  items: string[];
};

export type AdhocTableRow = {
  siteCode: string;
  vhm: string;
  siteName: string;
  cityStateCountry: string;
  week: string;
  releaseGtMppcGtMpw: number;
  releaseGtMppcLtMpw: number;
  releaseLtMppcGtMpw: number;
  behindScheduleFlag: number;
  behindScheduleQuantity: number;
  behindCount: number;
  q1Status: 'R' | 'Y' | 'G';
  grossDprLoss: number;
};

export const ADHOC_FILTER_PANELS: AdhocFilterPanel[] = [
  {
    key: 'release',
    title: 'Release vs APW, MPW, APPC, MPPC',
    countLabel: 'Release Choice Selected',
    items: [
      'Distinct Parts',
      'Release > MPPC and Release > MPW (-5 wks to now)',
      'Release > MPPC and Release > MPW (-5 wks to now)',
      'Release < MPPC and Release > MPW (-5 wks to now)',
      'Release < MPPC and Release > MPW (0 to 5 wks)',
      'Release > MPPC and Release < MPW (0 to 5 wks)',
      'Release < MPPC and Release > MPW (0 to 5 wks)',
      'Release > MPPC and Release < MPW (0 to 5 wks)',
      'Release < MPPC and Release < MPW (6 to 13 wks)',
      'Release > APPC and Release > APW (-5 wks to now)',
      'Release > APPC and Release < APW (-5 wks to now)',
      'Release < APPC and Release > APW (0 to 5 wks)',
      'Release < APPC and Release < APW (6 to 13 wks)',
      'Release < APPC and Release > APW (6 to 13 wks)',
      'Release < APPC and Release > APW (6 to 13 wks)',
    ],
  },
  {
    key: 'behind',
    title: 'BEHIND SCHEDULE',
    countLabel: 'Behind Choice Selected',
    items: [
      'Behind Schedule Quantity',
      'Behind Schedule Flag',
      'Behind Count',
      'Willmake Count',
      'Behind With Willmake Count',
      'Sum Behind With Willmake',
      'Current Week Willmake Under Transit',
      'Current Week Behind With Willmake',
      'Count Weeks Behind Schedule Past 6 weeks',
      'Consec Behind Schedule',
      'Count Behind With Willmake',
    ],
  },
  {
    key: 'delivery',
    title: 'Delivery Performance',
    countLabel: 'Delivery Performance selected',
    items: [
      'Gross Supplier Caused Disruption Loss (last 6mo)',
      'Supplier Caused Disruption Flag (last 6mo)',
      'Delivery Perf Composite',
      'Delivery Risk Composite',
      'Segmentation Model Rating',
    ],
  },
  {
    key: 'commercial',
    title: 'Commercial',
    countLabel: 'Commercial selected',
    items: [
      'Distressed Flag',
      'Commercial Perf Composite',
      'Commercial Risk Composite',
      'Cost Perf Score',
      'Commercial Health Score (CHS)',
      'Financial Health Rating (FHR)',
    ],
  },
  {
    key: 'q1msa',
    title: 'Q1 MSA DELIVERABLES',
    countLabel: 'MSA Delivery selected',
    items: [
      'MSA (all) Red',
      'MSA (all) Yellow',
      'MSA (all) Green',
      'MSA Delivery Red',
      'MSA Delivery Yellow',
      'MSA Delivery Green',
      'APQP Launch Capacity',
      'Leadership Turnover',
      'Quality (sub-tier) APQP',
      'MP&L Requirements',
      '(PM) Schedule',
      '(PM) Downtime Verified',
      '(PM) Housekeeping',
      'Problem Solving Communication',
      'Process Walk: Operator',
      'Process Walk: Machine',
      'Process Walk: Method',
    ],
  },
  {
    key: 'premium',
    title: 'PREMIUM FREIGHT (last 6mo)',
    countLabel: 'Premium Freight Choice Selected',
    items: [
      'Premium Freight Cost (last 6mo)',
      'Premium Freight Unique Parts (last 6mo)',
      'Premium Freight Quantity (last 6mo)',
      'Prem Freight Part Count > 6 flag (last 6mo)',
      'Premium Freight > $60k (last 6mo)',
      'Prem Freight > $30k (last 6mo)',
    ],
  },
  {
    key: 'sot',
    title: 'SOT CASES (last 6mo)',
    countLabel: 'SOT Choice Selected',
    items: [
      'SOT Case Count (last 6mo)',
      'SOT Case Flag (last 6mo)',
      'SOT Case Proactive (last 6mo)',
      'SOT Case Reactive (last 6mo)',
      'SOT Case Red (last 6mo)',
      'SOT Case Yellow (last 6mo)',
      'SOT Case Green (last 6mo)',
      'SOT Case Closed (last 6mo)',
      'SOT Case Open (last 6mo)',
      'SOT Case Active (last 6mo)',
    ],
  },
  {
    key: 'q1',
    title: 'Q1',
    countLabel: 'Q1 selected',
    items: [
      'Q1 Status',
      'Non Q1 Flag',
      'Q1 Warranty Category Score',
      'Q1 Capable System Category Score',
      'Q1 Delivery Category Score',
      'Q1 Quality Category Score',
      'Q1 Rating',
    ],
  },
];

export const ADHOC_SELECTED_ITEMS = {
  release: [
    'Release < APPC and Release > APW (6 to 13 wks)',
    'Release < APPC and Release > APW (6 to 13 wks)',
  ],
  behind: [],
  delivery: [],
  commercial: [],
  q1msa: [
    'Process Walk: Machine',
    'Process Walk: Method',
  ],
  premium: [
    'Prem Freight Part Count > 6 flag (last 6mo)',
    'Premium Freight > $60k (last 6mo)',
    'Prem Freight > $30k (last 6mo)',
  ],
  sot: [
    'SOT Case Reactive (last 6mo)',
    'SOT Case Red (last 6mo)',
    'SOT Case Yellow (last 6mo)',
    'SOT Case Green (last 6mo)',
    'SOT Case Closed (last 6mo)',
    'SOT Case Open (last 6mo)',
    'SOT Case Active (last 6mo)',
  ],
  q1: [
    'Q1 Status',
    'Q1 Delivery Category Score',
    'Q1 Quality Category Score',
    'Q1 Rating',
  ],
};

export const ADHOC_TABLE_ROWS: AdhocTableRow[] = [
  {
    siteCode: 'G2811',
    vhm: 'ELECTRIFIED SYSTEMS',
    siteName: 'APTIV SERVICES US LLC',
    cityStateCountry: 'CIUDAD JUAREZ, CH., MX',
    week: '02/09/2026',
    releaseGtMppcGtMpw: 3,
    releaseGtMppcLtMpw: 3,
    releaseLtMppcGtMpw: 1,
    behindScheduleFlag: 1,
    behindScheduleQuantity: -9876,
    behindCount: 8,
    q1Status: 'R',
    grossDprLoss: 567,
  },
];
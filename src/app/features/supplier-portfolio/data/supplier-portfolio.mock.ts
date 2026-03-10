// export type SegmentStatus = 'Red' | 'Yellow' | 'Green';

// export type SiteSegmentRow = {
//   site: string;
//   segment: 'Yes' | 'No';
// };

// export type ReleaseRequiredRow = {
//   group: string;
//   historical: number;
//   short: number;
//   near: number;
// };

// export type MetricWithYearsOne = {
//   yearPrimary: string;
//   yearSecondary: string;
//   value: number | string;
// };

// export type MetricWithYearsTwo = {
//   yearPrimary: string;
//   yearSecondary: string;
//   value1: number | string;
//   value2: number | string;
// };

// export type SupplierPortfolioSnapshot = {
//   siteCode: string;
//   supplier: string;
//   address: string;
//   country: string;
//   postalCode: string;
//   segmentStatus: SegmentStatus;

//   siteSegmentRows: SiteSegmentRow[];

//   supplierRegion: string;

//   q1Status: 'R' | 'Y' | 'G';
//   q1Score: number;

//   ppap: MetricWithYearsTwo;
//   commercialDate: string;
//   commercialDistress: 'No' | 'Yes';
//   commercialFhr: number;

//   tvm: {
//     yearPrimary: string;
//     gap: number;
//   };

//   behindSched: {
//     tab: string;
//     label1: string;
//     label2: string;
//     valueText: string;
//     value1: number;
//     value2: number;
//   };

//   dpr: {
//     yearPrimary: string;
//     yearSecondary: string;
//     lossUnit: number;
//   };

//   premiumFreight: {
//     yearPrimary: string;
//     yearSecondary: string;
//     amountK: number;
//     pieces: number;
//   };

//   vor: {
//     tab: string;
//     currentVor: number;
//   };

//   wers: {
//     yearPrimary: string;
//     yearSecondary: string;
//     alerts: number;
//     parts: number;
//   };

//   srea: {
//     yearPrimary: string;
//     yearSecondary: string;
//     req: number;
//     parts: number;
//   };

//   ecarOee: {
//     yearPrimary: string;
//     yearSecondary: string;
//     req: number;
//     parts: number;
//   };

//   fcsdBacklog: {
//     tab: string;
//     parts: number;
//     quantity: number;
//   };

//   msa: {
//     tab: string;
//     label: string;
//     red: number;
//     yellow: number;
//   };

//   systemicKpi: number;
//   behindKpi: number;
//   demandKpi: number;

//   releaseVsRequired: ReleaseRequiredRow[];

//   sotBreakdown: {
//     reactive: number;
//     red: number;
//     yellow: number;
//     green: number;
//     closed: number;
//     proactive: number;
//   };

//   plantBreakdown: {
//     vo: number;
//     pto: number;
//     other: number;
//   };
// };

// export const SUPPLIER_PORTFOLIO_SNAPSHOT: SupplierPortfolioSnapshot = {
//   siteCode: 'G2811',
//   supplier: 'APTIV SERVICES US LLC',
//   address: 'AVE DE LAS INDUSTRIAS SN, CIUDAD JUAREZ, CH.',
//   country: 'MX',
//   postalCode: '32470',
//   segmentStatus: 'Red',

//   siteSegmentRows: [
//     { site: 'G2811', segment: 'Yes' },
//   ],

//   supplierRegion: 'North America Flag',

//   q1Status: 'R',
//   q1Score: 52,

//   ppap: {
//     yearPrimary: '2025',
//     yearSecondary: '2024',
//     value1: 0,
//     value2: 0,
//   },

//   commercialDate: '09/30/2025',
//   commercialDistress: 'No',
//   commercialFhr: 61,

//   tvm: {
//     yearPrimary: '2025',
//     gap: 0.0,
//   },

//   behindSched: {
//     tab: 'WM + In Transit',
//     label1: 'Consec Week',
//     label2: 'Months of Consec Occurrence',
//     valueText: 'Behind',
//     value1: 4,
//     value2: 9,
//   },

//   dpr: {
//     yearPrimary: '2025',
//     yearSecondary: '2024',
//     lossUnit: 567,
//   },

//   premiumFreight: {
//     yearPrimary: '2025',
//     yearSecondary: '2024',
//     amountK: 562,
//     pieces: 104,
//   },

//   vor: {
//     tab: 'Comm',
//     currentVor: 11,
//   },

//   wers: {
//     yearPrimary: '2025',
//     yearSecondary: '2024',
//     alerts: 19,
//     parts: 15,
//   },

//   srea: {
//     yearPrimary: '2025',
//     yearSecondary: '2024',
//     req: 3,
//     parts: 2,
//   },

//   ecarOee: {
//     yearPrimary: '2025',
//     yearSecondary: '2024',
//     req: 8,
//     parts: 6,
//   },

//   fcsdBacklog: {
//     tab: 'current',
//     parts: 47,
//     quantity: 137956,
//   },

//   msa: {
//     tab: 'All',
//     label: 'Delivery',
//     red: 0,
//     yellow: 0,
//   },

//   systemicKpi: 1,
//   behindKpi: 2,
//   demandKpi: 2,

//   releaseVsRequired: [
//     { group: '› MPPC\n› MPW', historical: 3, short: 1, near: 0 },
//     { group: '› MPPC\n› MPW', historical: 3, short: 2, near: 2 },
//     { group: '› MPPC\n› MPW', historical: 1, short: 1, near: 0 },
//     { group: '› APPC\n› APW', historical: 5, short: 1, near: 0 },
//     { group: '› APPC\n› APW', historical: 3, short: 2, near: 3 },
//     { group: '› APPC\n› APW', historical: 1, short: 1, near: 0 },
//   ],

//   sotBreakdown: {
//     reactive: 1,
//     red: 0,
//     yellow: 0,
//     green: 1,
//     closed: 1,
//     proactive: 0,
//   },

//   plantBreakdown: {
//     vo: 3,
//     pto: 0,
//     other: 1,
//   },
// };


export type SegmentStatus = 'Red' | 'Yellow' | 'Green';

export type SiteSegmentRow = {
  site: string;
  segment: 'Yes' | 'No';
};

export type ReleaseRequiredRow = {
  group: string;
  historical: number;
  short: number;
  near: number;
};

export type MetricWithYearsOne = {
  yearPrimary: string;
  yearSecondary: string;
  value: number | string;
};

export type MetricWithYearsTwo = {
  yearPrimary: string;
  yearSecondary: string;
  value1: number | string;
  value2: number | string;
};

export type TrendPoint = {
  label: string;
  supplierRisk: number;
  systemicKpi: number;
  demandKpi: number;
  behindKpi: number;
  segmentLevel: 'green' | 'yellow' | 'orange' | 'red' | 'gray';
};

export type SupplierPortfolioSnapshot = {
  siteCode: string;
  supplier: string;
  address: string;
  country: string;
  postalCode: string;
  segmentStatus: SegmentStatus;

  siteSegmentRows: SiteSegmentRow[];

  supplierRegion: string;

  q1Status: 'R' | 'Y' | 'G';
  q1Score: number;

  ppap: MetricWithYearsTwo;
  commercialDate: string;
  commercialDistress: 'No' | 'Yes';
  commercialFhr: number;

  tvm: {
    yearPrimary: string;
    gap: number;
  };

  behindSched: {
    tab: string;
    label1: string;
    label2: string;
    valueText: string;
    value1: number;
    value2: number;
  };

  dpr: {
    yearPrimary: string;
    yearSecondary: string;
    lossUnit: number;
    loss2025: number;
    loss2024: number;
  };

  premiumFreight: {
    yearPrimary: string;
    yearSecondary: string;
    amountK: number;
    pieces: number;
    amount2025: number;
    pieces2025: number;
    amount2024: number;
    pieces2024: number;
  };

  vor: {
    tab: string;
    currentVor: number;
  };

  wers: {
    yearPrimary: string;
    yearSecondary: string;
    alerts: number;
    parts: number;
    alerts2025: number;
    parts2025: number;
    alerts2024: number;
    parts2024: number;
  };

  srea: {
    yearPrimary: string;
    yearSecondary: string;
    req: number;
    parts: number;
    req2025: number;
    parts2025: number;
    req2024: number;
    parts2024: number;
  };

  ecarOee: {
    yearPrimary: string;
    yearSecondary: string;
    req: number;
    parts: number;
  };

  fcsdBacklog: {
    tab: string;
    parts: number;
    quantity: number;
  };

  msa: {
    tab: string;
    label: string;
    red: number;
    yellow: number;
    lastUpdated: string;
    allRed: number;
    allYellow: number;
    deliveryRed: number;
    deliveryYellow: number;
  };

  systemicKpi: number;
  behindKpi: number;
  demandKpi: number;

  releaseVsRequired: ReleaseRequiredRow[];

  sotBreakdown: {
    reactive: number;
    red: number;
    yellow: number;
    green: number;
    closed: number;
    proactive: number;
  };

  plantBreakdown: {
    vo: number;
    pto: number;
    other: number;
  };

  trendChart: TrendPoint[];

  summaryRow1: {
    segmentKpi: 'Yes' | 'No';
    segment: string;
    behindSched: number;
    behindFreight: number;
    behindDpr: number;
    systemicDistress: number;
    systemicNonQ1: number;
    demandHistory: number;
    demandShort: number;
    demandNear: number;
    q1: 'No' | 'Yes';
    q1Status: string;
    q1Score: number;
    distress: 'No' | 'Yes';
    fhr: number;
  };

  summaryRow2: {
    q1MsaKpi: number;
    msaLastUpdated: string;
    msaAllRed: number;
    msaAllYellow: number;
    msaDeliveryRed: number;
    msaDeliveryYellow: number;
    sotKpi: number;
    sotRed: number;
    sotYellow: number;
    sotGreen: number;
    sotReactive: number;
    sotProactive: number;
    dprKpi: number;
    dprLoss2025: number;
    dprLoss2024: number;
    freightKpi: number;
    freight2025Amount: number;
    freight2025Pieces: number;
    freight2024Amount: number;
    freight2024Pieces: number;
  };

  summaryRow3: {
    behindKpi: number;
    behindSchedConsecWeeks: number;
    behindSchedConsecMonths: number;
    underTransitConsecWeeks: number;
    underTransitConsecMonths: number;
    fcsdKpi: number;
    fcsdBacklogParts: number;
    fcsdBacklogPieces: number;
    currentVor: number;
    wersKpi: number;
    wers2025Alerts: number;
    wers2025Parts: number;
    wers2024Alerts: number;
    wers2024Parts: number;
    sreaKpi: number;
    srea2025Requests: number;
    srea2025Parts: number;
    srea2024Requests: number;
    srea2024Parts: number;
  };

  productPortfolio: {
    supplierShippingCodes: string[];
    voPlants: string[];
    ptoPlants: string[];
    otherPlants: string[];
    leadVhm: string;
    amount: number;
    distressedSupplier: string;
    accommodation: string;
  };
};

export const SUPPLIER_PORTFOLIO_SNAPSHOT: SupplierPortfolioSnapshot = {
  siteCode: 'G2811',
  supplier: 'APTIV SERVICES US LLC',
  address: 'AVE DE LAS INDUSTRIAS SN, CIUDAD JUAREZ, CH.',
  country: 'MX',
  postalCode: '32470',
  segmentStatus: 'Red',

  siteSegmentRows: [
    { site: 'G2811', segment: 'Yes' },
  ],

  supplierRegion: 'North America Flag',

  q1Status: 'R',
  q1Score: 52,

  ppap: {
    yearPrimary: '2025',
    yearSecondary: '2024',
    value1: 0,
    value2: 0,
  },

  commercialDate: '09/30/2025',
  commercialDistress: 'No',
  commercialFhr: 61,

  tvm: {
    yearPrimary: '2025',
    gap: 0.0,
  },

  behindSched: {
    tab: 'WM + In Transit',
    label1: 'Consec Week',
    label2: 'Months of Consec Occurrence',
    valueText: 'Behind',
    value1: 4,
    value2: 9,
  },

  dpr: {
    yearPrimary: '2025',
    yearSecondary: '2024',
    lossUnit: 567,
    loss2025: 567,
    loss2024: 0,
  },

  premiumFreight: {
    yearPrimary: '2025',
    yearSecondary: '2024',
    amountK: 562,
    pieces: 104,
    amount2025: 562102,
    pieces2025: 104,
    amount2024: 222960,
    pieces2024: 25,
  },

  vor: {
    tab: 'Comm',
    currentVor: 11,
  },

  wers: {
    yearPrimary: '2025',
    yearSecondary: '2024',
    alerts: 19,
    parts: 15,
    alerts2025: 19,
    parts2025: 15,
    alerts2024: 0,
    parts2024: 0,
  },

  srea: {
    yearPrimary: '2025',
    yearSecondary: '2024',
    req: 3,
    parts: 2,
    req2025: 3,
    parts2025: 2,
    req2024: 0,
    parts2024: 0,
  },

  ecarOee: {
    yearPrimary: '2025',
    yearSecondary: '2024',
    req: 8,
    parts: 6,
  },

  fcsdBacklog: {
    tab: 'current',
    parts: 47,
    quantity: 137956,
  },

  msa: {
    tab: 'All',
    label: 'Delivery',
    red: 0,
    yellow: 0,
    lastUpdated: '',
    allRed: 0,
    allYellow: 0,
    deliveryRed: 0,
    deliveryYellow: 0,
  },

  systemicKpi: 1,
  behindKpi: 2,
  demandKpi: 2,

  releaseVsRequired: [
    { group: '› MPPC\n› MPW', historical: 3, short: 1, near: 0 },
    { group: '› MPPC\n› MPW', historical: 3, short: 2, near: 2 },
    { group: '› MPPC\n› MPW', historical: 1, short: 1, near: 0 },
    { group: '› APPC\n› APW', historical: 5, short: 1, near: 0 },
    { group: '› APPC\n› APW', historical: 3, short: 2, near: 3 },
    { group: '› APPC\n› APW', historical: 1, short: 1, near: 0 },
  ],

  sotBreakdown: {
    reactive: 1,
    red: 0,
    yellow: 0,
    green: 1,
    closed: 1,
    proactive: 0,
  },

  plantBreakdown: {
    vo: 3,
    pto: 0,
    other: 1,
  },

  trendChart: [
    { label: '01 Jan', supplierRisk: 3, systemicKpi: 0, demandKpi: 1, behindKpi: 0, segmentLevel: 'yellow' },
    { label: '08 Jan', supplierRisk: 3, systemicKpi: 0, demandKpi: 2, behindKpi: 0, segmentLevel: 'yellow' },
    { label: '15 Jan', supplierRisk: 3, systemicKpi: 0, demandKpi: 2, behindKpi: 0, segmentLevel: 'yellow' },
    { label: '22 Jan', supplierRisk: 3, systemicKpi: 0, demandKpi: 2, behindKpi: 1, segmentLevel: 'yellow' },
    { label: '29 Jan', supplierRisk: 4, systemicKpi: 0, demandKpi: 1, behindKpi: 1, segmentLevel: 'orange' },
    { label: '05 Feb', supplierRisk: 4, systemicKpi: 0, demandKpi: 2, behindKpi: 1, segmentLevel: 'orange' },
    { label: '12 Feb', supplierRisk: 5, systemicKpi: 0, demandKpi: 2, behindKpi: 2, segmentLevel: 'red' },
    { label: '19 Feb', supplierRisk: 5, systemicKpi: 0, demandKpi: 2, behindKpi: 2, segmentLevel: 'red' },
    { label: '26 Feb', supplierRisk: 5, systemicKpi: 0, demandKpi: 2, behindKpi: 2, segmentLevel: 'red' },
    { label: '04 Mar', supplierRisk: 4, systemicKpi: 0, demandKpi: 1, behindKpi: 1, segmentLevel: 'orange' },
    { label: '11 Mar', supplierRisk: 3, systemicKpi: 0, demandKpi: 1, behindKpi: 1, segmentLevel: 'yellow' },
    { label: '18 Mar', supplierRisk: 3, systemicKpi: 0, demandKpi: 2, behindKpi: 0, segmentLevel: 'yellow' },
    { label: '25 Mar', supplierRisk: 2, systemicKpi: 1, demandKpi: 1, behindKpi: 1, segmentLevel: 'green' },
    { label: '01 Apr', supplierRisk: 2, systemicKpi: 1, demandKpi: 1, behindKpi: 1, segmentLevel: 'green' },
    { label: '08 Apr', supplierRisk: 2, systemicKpi: 1, demandKpi: 1, behindKpi: 1, segmentLevel: 'green' },
    { label: '15 Apr', supplierRisk: 2, systemicKpi: 1, demandKpi: 1, behindKpi: 1, segmentLevel: 'green' },
    { label: '22 Apr', supplierRisk: 5, systemicKpi: 0, demandKpi: 2, behindKpi: 2, segmentLevel: 'red' },
    { label: '29 Apr', supplierRisk: 5, systemicKpi: 0, demandKpi: 2, behindKpi: 2, segmentLevel: 'red' },
    { label: '06 May', supplierRisk: 5, systemicKpi: 0, demandKpi: 3, behindKpi: 2, segmentLevel: 'red' },
    { label: '13 May', supplierRisk: 5, systemicKpi: 0, demandKpi: 3, behindKpi: 2, segmentLevel: 'red' },
    { label: '20 May', supplierRisk: 5, systemicKpi: 0, demandKpi: 3, behindKpi: 2, segmentLevel: 'red' },
    { label: '27 May', supplierRisk: 5, systemicKpi: 0, demandKpi: 3, behindKpi: 2, segmentLevel: 'red' },
  ],

  summaryRow1: {
    segmentKpi: 'Yes',
    segment: '1_Red',
    behindSched: 0,
    behindFreight: 1,
    behindDpr: 1,
    systemicDistress: 0,
    systemicNonQ1: 1,
    demandHistory: 1,
    demandShort: 1,
    demandNear: 0,
    q1: 'No',
    q1Status: 'R',
    q1Score: 52,
    distress: 'No',
    fhr: 61,
  },

  summaryRow2: {
    q1MsaKpi: 0,
    msaLastUpdated: "0",
    msaAllRed: 0,
    msaAllYellow: 0,
    msaDeliveryRed: 0,
    msaDeliveryYellow: 0,
    sotKpi: 1,
    sotRed: 0,
    sotYellow: 0,
    sotGreen: 1,
    sotReactive: 1,
    sotProactive: 0,
    dprKpi: 1,
    dprLoss2025: 567,
    dprLoss2024: 0,
    freightKpi: 1,
    freight2025Amount: 562102,
    freight2025Pieces: 104,
    freight2024Amount: 222960,
    freight2024Pieces: 25,
  },

  summaryRow3: {
    behindKpi: 1,
    behindSchedConsecWeeks: 4,
    behindSchedConsecMonths: 9,
    underTransitConsecWeeks: 0,
    underTransitConsecMonths: 0,
    fcsdKpi: 1,
    fcsdBacklogParts: 47,
    fcsdBacklogPieces: 137956,
    currentVor: 11,
    wersKpi: 1,
    wers2025Alerts: 19,
    wers2025Parts: 15,
    wers2024Alerts: 0,
    wers2024Parts: 0,
    sreaKpi: 1,
    srea2025Requests: 3,
    srea2025Parts: 2,
    srea2024Requests: 0,
    srea2024Parts: 0,
  },

  productPortfolio: {
    supplierShippingCodes: ['EAYEH', 'G2811', 'G281R'],
    voPlants: ['APB2A', 'APB3A', 'G9W1A'],
    ptoPlants: [],
    otherPlants: ['T896B'],
    leadVhm: 'Digital Tech | CTO',
    amount: 55661929,
    distressedSupplier: 'Accommodation',
    accommodation: '',
  },
};
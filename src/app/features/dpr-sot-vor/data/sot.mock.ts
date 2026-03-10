export type CaseType = 'Proactive' | 'Reactive';
export type Status = 'Open' | 'Green' | 'Yellow' | 'Red';
export type SupplierRegion = 'North America Flag' | 'EU Flag' | 'APAC Flag';

export type SotCase = {
  id: string;
  week: string;          
  supplier: string;      
  supplierRegion: SupplierRegion;

  siteCode: string;     
  staVhm: string;        
  caseType: CaseType;

  delayDays?: number;    
  activeSite: boolean;  
}
export function statusFromDelay(delayDays?: number): Status {
  if (delayDays === undefined || delayDays === null) return 'Open';
  if (delayDays <= 2) return 'Green';
  if (delayDays <= 5) return 'Yellow';
  return 'Red';
}


export const SOT_CASES: SotCase[] = [
  {
    id: 'C-001',
    week: '02/09/2026',
    supplier: 'APTIV SERVICES US LLC',
    supplierRegion: 'North America Flag',
    siteCode: 'G2811',
    staVhm: 'ELECTRIFIED SYSTEMS',
    caseType: 'Proactive',
    delayDays: 1,         
    activeSite: true,
  },
  {
    id: 'C-002',
    week: '02/09/2026',
    supplier: 'APTIV SERVICES US LLC',
    supplierRegion: 'North America Flag',
    siteCode: 'G2811',
    staVhm: 'ELECTRIFIED SYSTEMS',
    caseType: 'Reactive',
    delayDays: 4,         
    activeSite: true,
  },

  
  {
    id: 'C-003',
    week: '02/02/2026',
    supplier: 'APTIV SERVICES US LLC',
    supplierRegion: 'North America Flag',
    siteCode: 'G2811',
    staVhm: 'ELECTRIFIED SYSTEMS',
    caseType: 'Reactive',
    delayDays: 7,         
    activeSite: true,
  },
  {
    id: 'C-004',
    week: '02/09/2026',
    supplier: 'BOSCH',
    supplierRegion: 'EU Flag',
    siteCode: 'B1001',
    staVhm: 'POWERTRAIN',
    caseType: 'Proactive',
    // delayDays: " " as of now missed
    activeSite: false,
  },
];
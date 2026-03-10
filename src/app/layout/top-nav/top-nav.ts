import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

type NavItem = { label: string; path: string; disabled?: boolean };

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterLink, RouterLinkActive],
  templateUrl: './top-nav.html',
  styleUrl: './top-nav.scss',
})
export class TopNav {
  items = [
  { label: 'Segmentation', path: '/segmentation' },
  { label: 'Supplier Portfolio', path: '/supplier-portfolio' },
  { label: 'Quality | Commercial', path: '/quality-commercial' },
  { label: 'Freight | FCSD', path: '/freight-fcsd' },
  { label: 'Behind Sched', path: '/behind-sched' },
  { label: 'DPR | SOT | VOR', path: '/dpr-sot-vor' },
  { label: 'ADHOC', path: '/adhoc' },
  { label: 'WERS | SREA', path: '/wers-srea' },
  { label: 'eCar | TVM', path: '/ecar-tvm' },
  { label: 'Capacity Study', path: '/capacity-study' },
  { label: 'Red Case Suppliers', path: '/red-case-suppliers' },
  { label: 'Contact | Info ', path: '/contact-info' },
];
}
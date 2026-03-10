import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNav } from '../top-nav/top-nav';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [TopNav, RouterOutlet],
  templateUrl: './shell.html',
  styleUrl: './shell.scss',
})
export class Shell {}
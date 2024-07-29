import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, AsideComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}

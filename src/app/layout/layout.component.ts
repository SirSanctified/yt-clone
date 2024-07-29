import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, AsideComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}

import { Component, EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faBell,
  faUserCircle,
  faVideoCamera,
} from '@fortawesome/free-solid-svg-icons';
import { SearchComponent } from '../../search/search.component';
import { RouterLink } from '@angular/router';
import { FiltersComponent } from '../../filters/filters.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, SearchComponent, RouterLink, FiltersComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() toggle = new EventEmitter();
  toggleAside() {
    this.toggle.emit(false);
  }
  menu = faBars;
  video = faVideoCamera;
  bell = faBell;
  user = faUserCircle;
}

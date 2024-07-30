import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faBell,
  faUserCircle,
  faVideoCamera,
} from '@fortawesome/free-solid-svg-icons';
import { SearchComponent } from '../../search/search.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, SearchComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() show: boolean = true;
  @Output() showChange = new EventEmitter<boolean>();
  toggleAside(state: boolean) {
    this.show = state;
    this.showChange.emit(this.show);
  }
  menu = faBars;
  video = faVideoCamera;
  bell = faBell;
  user = faUserCircle;
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Filter } from '../youtube-videos.service';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent {
  @Input() filters: Filter[] = [];
  @Input() selectedFilter = 'All';
  @Output() selectedFilterChange = new EventEmitter<string>();

  setSelectedFilter(filter: string) {
    this.selectedFilter = filter;
    this.selectedFilterChange.emit(filter);
  }
}

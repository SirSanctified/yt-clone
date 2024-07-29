import { Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent {
  filters = [
    'all',
    'music',
    'video',
    'podcasts',
    'computer science',
    'programming',
    'web development',
    'javascript',
    'angular',
    'react',
    'farming',
    'gardening',
    'cooking',
    'cats',
    'dogs',
  ];
}

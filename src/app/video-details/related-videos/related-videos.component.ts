import { RouterLink } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { RelatedVideo } from '../../youtube-videos.service';
import { FiltersComponent } from '../../filters/filters.component';

@Component({
  selector: 'app-related-videos',
  standalone: true,
  imports: [RouterLink, FiltersComponent],
  templateUrl: './related-videos.component.html',
  styleUrl: './related-videos.component.css',
})
export class RelatedVideosComponent implements OnInit {
  @Input() relatedVideos: RelatedVideo | undefined;
  @Input() filters: string[] | undefined = [];
  selectedFilter = '';

  setSelectedFilter(filter: string) {
    this.selectedFilter = filter;
  }

  constructor() {}

  ngOnInit(): void {
    this.selectedFilter = this.filters?.[0] ?? '';
  }
}

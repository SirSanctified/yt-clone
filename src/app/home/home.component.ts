import {
  Filter,
  HomeVideoData,
  YoutubeVideosService,
} from './../youtube-videos.service';
import { Component, inject, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';
import { FiltersComponent } from '../filters/filters.component';

@Pipe({
  name: 'formatNumber',
  standalone: true,
})
export class FormatNumberPipe implements PipeTransform {
  transform(value: number | string): string {
    if (Number(value) >= 1000000000) {
      return (Number(value) / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
    }
    if (Number(value) >= 1000000) {
      return (Number(value) / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (Number(value) >= 1000) {
      return (Number(value) / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return Number(value).toString();
  }
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, FiltersComponent, FormatNumberPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  youtubeVideoService = inject(YoutubeVideosService);
  videos: HomeVideoData[] = [];
  filters: Filter[] = [];
  constructor(youtubeVideoService: YoutubeVideosService) {}
  ngOnInit(): void {
    this.youtubeVideoService.getHomeVideos().then((data) => {
      this.videos = data.data;
      this.filters = data.filters;
    });
  }
  menu = faEllipsisVertical;
  selectedFilter = 'All';
}

import {
  Component,
  inject,
  Input,
  OnInit,
  Pipe,
  PipeTransform,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faClosedCaptioning,
  faEllipsis,
  faExpand,
  faForwardStep,
  faGear,
  faObjectGroup,
  faPanorama,
  faPlay,
  faPlayCircle,
  faThumbsDown,
  faThumbsUp,
  faToggleOn,
  faUserCircle,
  faVolumeUp,
} from '@fortawesome/free-solid-svg-icons';
import { formatDistanceStrict } from 'date-fns';
import { FormatNumberPipe } from '../home/home.component';
import { type VideoResponse } from './../youtube-videos.service';
import { YoutubeVideosService } from '../youtube-videos.service';
import { RelatedVideosComponent } from './related-videos/related-videos.component';
import { CommentsComponent } from './comments/comments.component';

@Pipe({
  name: 'duration',
  standalone: true,
})
export class DurationPipe implements PipeTransform {
  transform(value: string | undefined): string {
    // return in format hr:min:sec, value is in seconds
    if (!value) {
      return '00:00';
    }

    const hours = Math.floor(Number(value) / 3600);
    const minutes = Math.floor((Number(value) % 3600) / 60);
    const seconds = Math.floor(Number(value) % 60);
    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  }
}

@Pipe({
  name: 'timeFromNow',
  standalone: true,
})
export class TimeFromNowPipe implements PipeTransform {
  transform(value: string | undefined): string {
    if (!value) {
      return '';
    }
    return formatDistanceStrict(new Date(value), new Date(), {
      addSuffix: true,
    });
  }
}

@Component({
  selector: 'app-video-details',
  standalone: true,
  imports: [
    FontAwesomeModule,
    RouterLink,
    DurationPipe,
    FormatNumberPipe,
    TimeFromNowPipe,
    RelatedVideosComponent,
    CommentsComponent,
  ],
  templateUrl: './video-details.component.html',
  styleUrl: './video-details.component.css',
})
export class VideoDetailsComponent implements OnInit {
  @Input() videoId!: string;
  route = inject(ActivatedRoute);
  youtubeVideosService = inject(YoutubeVideosService);
  videoData: VideoResponse | undefined;
  expand = false;

  toggleExpand() {
    this.expand = !this.expand;
  }

  play = faPlay;
  volume = faVolumeUp;
  next = faForwardStep;
  autoPlay = faToggleOn;
  subtitles = faClosedCaptioning;
  settings = faGear;
  cinemaMode = faPanorama;
  fullscreen = faExpand;
  multiplayer = faObjectGroup;
  like = faThumbsUp;
  dislike = faThumbsDown;
  more = faEllipsis;
  user = faUserCircle;
  videos = faPlayCircle;

  constructor(youtubeVideoService: YoutubeVideosService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.videoId = params['videoId'];
    });
    if (this.videoData) return;
    this.youtubeVideosService.getVideo(this.videoId).then((data) => {
      console.log('Got video data: ');
      this.videoData = data;
    });
  }
}

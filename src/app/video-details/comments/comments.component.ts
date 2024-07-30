import { Component, inject, Input, OnInit } from '@angular/core';
import {
  CommentResponse,
  YoutubeVideosService,
} from '../../youtube-videos.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChevronDown,
  faSortAlphaAsc,
  faThumbsDown,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css',
})
export class CommentsComponent implements OnInit {
  @Input() videoId!: string;
  commentsData: CommentResponse | undefined;
  youtubeVideoService = inject(YoutubeVideosService);
  constructor(youtubeVideoService: YoutubeVideosService) {}

  ngOnInit(): void {
    if (this.commentsData) return;
    this.youtubeVideoService.getVideoComments(this.videoId).then((data) => {
      this.commentsData = data;
    });
  }

  sort = faSortAlphaAsc;
  like = faThumbsUp;
  dislike = faThumbsDown;
  chevronDown = faChevronDown;
}

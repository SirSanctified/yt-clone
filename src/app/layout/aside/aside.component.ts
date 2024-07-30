import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBoltLightning,
  faClockFour,
  faClockRotateLeft,
  faFileVideo,
  faFire,
  faFlag,
  faGamepad,
  faGear,
  faHomeAlt,
  faHomeUser,
  faMessage,
  faMusic,
  faPhotoVideo,
  faPlay,
  faQuestionCircle,
  faThumbsUp,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
})
export class AsideComponent {
  @Input() show: boolean = true;
  home = faHomeAlt;
  shorts = faBoltLightning;
  subs = faPhotoVideo;
  user = faHomeUser;
  history = faClockRotateLeft;
  playlist = faPlay;
  yourVideos = faFileVideo;
  watchLater = faClockFour;
  likedVideos = faThumbsUp;
  trending = faFire;
  music = faMusic;
  gaming = faGamepad;
  sport = faTrophy;
  settings = faGear;
  flag = faFlag;
  help = faQuestionCircle;
  message = faMessage;
}

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShortsComponent } from './shorts/shorts.component';
import { TrendingComponent } from './trending/trending.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { VideoDetailsComponent } from './video-details/video-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'shorts',
    component: ShortsComponent,
  },
  {
    path: 'trending',
    component: TrendingComponent,
  },
  {
    path: 'playlists',
    component: PlaylistsComponent,
  },
  {
    path: 'video/:videoId',
    component: VideoDetailsComponent,
  },
];

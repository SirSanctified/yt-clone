import { Injectable } from '@angular/core';

export interface Filter {
  filter: string;
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface RichThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface HomeVideoData {
  type: string;
  videoId: string;
  title: string;
  description: string;
  viewCount: string;
  publishedTimeText: string;
  lengthText: string;
  thumbnail: Thumbnail[];
  richThumbnail: RichThumbnail[];
}

export interface HomeVideoResponse {
  filters: Filter[];
  continuation: string;
  data: HomeVideoData[];
  msg: string;
}

@Injectable({
  providedIn: 'root',
})
export class YoutubeVideosService {
  constructor() {}
  baseUrl = 'https://yt-api.p.rapidapi.com/';
  options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '',
      'x-rapidapi-host': 'yt-api.p.rapidapi.com',
    },
  };
  async getHomeVideos(): Promise<HomeVideoResponse> {
    const response = await fetch(this.baseUrl + 'home', this.options);
    const data: HomeVideoResponse = await response.json();
    return data;
  }
  getVideo() {}
  getVideoComments() {}
}

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
export interface Subtitle {
  languageName: string;
  languageCode: string;
  isTranslatable: boolean;
  url: string;
}

export interface TranslationLanguage {
  languageCode: string;
  languageName: string;
}

export interface SubtitleResponse {
  subtitles: Subtitle[];
  format: string;
  translationLanguages: TranslationLanguage[];
}

export interface Storyboard {
  width: string;
  height: string;
  thumbsCount: string;
  columns: string;
  rows: string;
  interval: string;
  storyboardCount: number;
  url: string[];
}

export interface ChannelThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface VideoData {
  type: string;
  videoId: string;
  title: string;
  lengthText: string;
  viewCount: string;
  publishedTimeText: string;
  thumbnail: Thumbnail[];
  channelTitle: string;
  channelId: string;
  channelThumbnail: ChannelThumbnail[];
}

export interface RelatedVideo {
  continuation: string;
  data: VideoData[];
}
export interface CommentData {
  commentId: string;
  authorText: string;
  authorChannelId: string;
  authorThumbnail: Thumbnail[];
  textDisplay: string;
  publishedTimeText: string;
  likesCount: string;
  replyCount: number;
  replyToken: string;
  authorIsChannelOwner: boolean;
}
export interface VideoResponse {
  id: string;
  title: string;
  lengthSeconds: string;
  keywords: string[];
  channelTitle: string;
  channelId: string;
  description: string;
  thumbnail: Thumbnail[];
  allowRatings: boolean;
  viewCount: string;
  isPrivate: boolean;
  isUnpluggedCorpus: boolean;
  isLiveContent: boolean;
  isCrawlable: boolean;
  isFamilySafe: boolean;
  availableCountries: string[];
  isUnlisted: boolean;
  category: string;
  publishDate: string;
  uploadDate: string;
  subtitles: Subtitle;
  storyboards: Storyboard[];
  superTitle?: any;
  likeCount: string;
  channelThumbnail: ChannelThumbnail[];
  channelBadges: string[];
  subscriberCountText: string;
  subscriberCount: number;
  commentCountText: string;
  commentCount: number;
  relatedVideos: RelatedVideo;
}

export interface CommentResponse {
  commentsCount: string;
  continuation: string;
  data: CommentData[];
  msg: string;
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
  async getVideo(id: string): Promise<VideoResponse> {
    const response = await fetch(
      `${this.baseUrl}video/info?id=${id}`,
      this.options
    );
    const data: VideoResponse = await response.json();
    return data;
  }
  async getVideoComments(id: string) {
    const response = await fetch(
      `${this.baseUrl}comments?id=${id}`,
      this.options
    );
    const data: CommentResponse = await response.json();
    return data;
  }
}

import { Provider } from '@angular/core';

export interface RespuestaTopHeadlines {
  status: string;
  totalResults: number;
  articles: Article[];
}
export interface Article {
  id: number;
  date: string;
  date_gmt: string;
  guid: Guid;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: Guid;
  content: Content;
  excerpt: Content;
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: any[];
  categories: number[];
  tags: any[];
  yst_prominent_words: any[];
  better_featured_image: Betterfeaturedimage;
  _links: Links;
}

interface Links {
  self: Self[];
  collection: Self[];
  about: Self[];
  author: Author[];
  replies: Author[];
  'version-history': Versionhistory[];
  'predecessor-version': Predecessorversion[];
  'wp:featuredmedia': Author[];
  'wp:attachment': Self[];
  'wp:term': Wpterm[];
  curies: Cury[];
}

interface Cury {
  name: string;
  href: string;
  templated: boolean;
}

interface Wpterm {
  taxonomy: string;
  embeddable: boolean;
  href: string;
}

interface Predecessorversion {
  id: number;
  href: string;
}

interface Versionhistory {
  count: number;
  href: string;
}

interface Author {
  embeddable: boolean;
  href: string;
}

interface Self {
  href: string;
}

interface Betterfeaturedimage {
  id: number;
  alt_text: string;
  caption: string;
  description: string;
  media_type: string;
  media_details: Mediadetails;
  post: number;
  source_url: string;
}

interface Mediadetails {
  width: number;
  height: number;
  file: string;
  sizes: Sizes;
  image_meta: Imagemeta;
}

interface Imagemeta {
  aperture: string;
  credit: string;
  camera: string;
  caption: string;
  created_timestamp: string;
  copyright: string;
  focal_length: string;
  iso: string;
  shutter_speed: string;
  title: string;
  orientation: string;
  keywords: any[];
}

interface Sizes {
  thumbnail: Thumbnail;
  medium: Thumbnail;
  medium_large: Thumbnail;
  large: Thumbnail;
  thumblist: Thumbnail;
  meccarouselthumb: Thumbnail;
  'post-thumbnail': Thumbnail;
  '50x50': Thumbnail;
  'clients-slider': Thumbnail;
  testimonials: Thumbnail;
  'blog-navi': Thumbnail;
  'portfolio-mf': Thumbnail;
  'portfolio-mf-w': Thumbnail;
  'portfolio-mf-t': Thumbnail;
  'portfolio-list': Thumbnail;
  'blog-portfolio': Thumbnail;
  'blog-single': Thumbnail;
}

interface Thumbnail {
  file: string;
  width: number;
  height: number;
  'mime-type': string;
  source_url: string;
}

interface Content {
  rendered: string;
  protected: boolean;
}

interface Guid {
  rendered: string;
}
/* 
export interface RespuestaTopHeadlines {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: Source;
  author?: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content?: string;
}

export interface Source {
  id?: string;
  name: string;
} */


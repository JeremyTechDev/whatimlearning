export interface FeaturedCode {
  id: number;
  code: string;
  language: string;
}

export interface Technology {
  id: number;
  title: string;
  description: string;
  cover_img: string;
  last_update: string;
  featured_code: FeaturedCode;
  resources: [Resource];
  user: User;
}

export interface Resource {
  id: number;
  url: string;
  is_free: boolean;
}

export interface User {
  id: number;
  profile_background: string | null;
  profile_image: string | null;
  twitter_id: number | null;
  twitter_name: string | null;
  username: string;
}

export interface TechnologyCard {
  title: string;
  description: string;
  language: string;
  code: string;
  image: string;
}

export interface ResourceCard {
  url: string;
  isFree: boolean;
}

export interface PaginationResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

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
}

export interface Resource {
  id: number;
  title: string;
  description: string;
  url: string;
  is_free: boolean;
  technology: Technology;
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

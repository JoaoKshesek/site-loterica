interface BlockCard {
  id: number;
  title: string;
  slug: string;
  special: boolean;
  banner_image: string;
  url_image: string;
}

export interface HomeResponse {
  blocks: BlockCard[];
}

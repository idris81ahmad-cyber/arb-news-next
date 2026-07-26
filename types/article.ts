export interface Article {
  id: number;
  title: string;
  category: string;
  content: string;
  imageUrl: string;
  date: string;
  source: string;
}

export type Category =
  | "All"
  | "Politics"
  | "Sports"
  | "Entertainment"
  | "Business"
  | "Culture"
  | "Environment";

export const CATEGORIES: Category[] = [
  "All",
  "Politics",
  "Sports",
  "Entertainment",
  "Business",
  "Culture",
  "Environment",
];

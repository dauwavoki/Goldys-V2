
export interface ProductOption {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  isSubscription: boolean;
  savings?: string;
}

export interface Benefit {
  title: string;
  description: string;
  image: string;
}

export interface Review {
  author: string;
  rating: number;
  content: string;
  date: string;
  verified: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

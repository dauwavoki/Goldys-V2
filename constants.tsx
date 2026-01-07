
import React from 'react';
import { ProductOption, Benefit, Review, FAQItem } from './types';
import { Sparkles, Heart, Moon, Sun, ShieldCheck, Flower2 } from 'lucide-react';

export const COLORS = {
  primaryYellow: '#FFBF00', // Sunset Yellow
  black: '#1A1A1A',
  background: '#FDF8E1', // California Cream
  secondaryOrange: '#E66E33', // Sunset Orange
  secondaryTeal: '#2A6B69',
  darkText: '#2D2A26',
};

export const PRODUCT_OPTIONS: ProductOption[] = [
  {
    id: 'sub-1',
    name: 'The Ritual Set (Subscription)',
    price: 59.00,
    originalPrice: 75.00,
    description: 'Billed monthly. Pause or cancel anytime.',
    isSubscription: true,
    savings: 'Save 21%'
  },
  {
    id: 'one-1',
    name: 'The Ritual Set (One-Time)',
    price: 75.00,
    description: 'One-time purchase of our complete starter kit.',
    isSubscription: false
  }
];

export const BENEFITS: Benefit[] = [
  {
    title: 'Flower',
    description: 'Premium sun-grown floral blends hand-picked at peak potency for maximum flavor and therapeutic effect.',
    image: 'https://i.imgur.com/qbWeH2J.png'
  },
  {
    title: 'Pre-Rolls',
    description: 'Expertly crafted floral rolls using our top-shelf blooms for a convenient and consistent daily ritual.',
    image: 'https://i.imgur.com/A2qD3Vz.png'
  },
  {
    title: 'Gummies',
    description: 'Deliciously infused floral gummies designed for a controlled, enjoyable, and uplifting experience.',
    image: 'https://i.imgur.com/9otBVAd.png'
  }
];

export const REVIEWS: Review[] = [
  {
    author: "Sarah L.",
    rating: 5,
    content: "Goldy's has completely changed my morning routine. I feel lighter and more focused than ever before. The ritual itself is so beautiful.",
    date: "2 days ago",
    verified: true
  },
  {
    author: "Michael R.",
    rating: 5,
    content: "The quality of these flowers is unmatched. You can tell they are sourced with love and care. My energy levels have stabilized.",
    date: "1 week ago",
    verified: true
  },
  {
    author: "Elena G.",
    rating: 4,
    content: "Beautiful packaging and even better results. I've noticed a significant improvement in my sleep quality after incorporating the evening blend.",
    date: "2 weeks ago",
    verified: true
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How do I use the Ritual Set?",
    answer: "Our Ritual Set comes with a detailed guide. Simply steep 1 teaspoon of your chosen floral blend in hot water for 5 minutes, breathe in the aroma, and enjoy mindfully."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes! You can manage your subscription easily through your account portal. Pause, skip, or cancel at any time with no hidden fees."
  },
  {
    question: "Are the flowers organic?",
    answer: "Absolutely. We source only the highest quality, pesticide-free, organic edible flowers from sustainable farms around the world."
  }
];

export const FEATURES = [
  { icon: <Flower2 size={24} />, text: "100% Organic" },
  { icon: <ShieldCheck size={24} />, text: "Vegan & Gluten-Free" },
  { icon: <Sparkles size={24} />, text: "Lab Tested" },
  { icon: <Heart size={24} />, text: "Ethically Sourced" }
];

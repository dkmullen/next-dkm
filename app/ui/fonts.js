import { Roboto } from 'next/font/google';
import { Roboto_Mono } from 'next/font/google';

export const roboto = Roboto({
  weight: ['200', '400', '700'],
  subsets: ['latin'],
});

export const robotoMono = Roboto_Mono({
  weight: ['200', '400', '700'],
  subsets: ['latin'],
});

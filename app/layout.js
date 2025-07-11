import './globals.css';
import { robotoMono } from './ui/fonts';
import TopBar from './ui/top-bar';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={robotoMono.className}>
        <TopBar />
        {children}
      </body>
    </html>
  );
}

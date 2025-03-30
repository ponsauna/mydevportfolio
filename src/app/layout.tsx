import './globals.css';
import { ReactNode } from 'react';
import Header from './components/Header';

export const metadata = {
  title: 'My Portfolio Site',
  description: 'シンプルでミニマルなポートフォリオサイト',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <footer>
          <p>© 2025 My Portfolio. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

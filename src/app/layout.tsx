// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'My Portfolio Site',
  description: 'シンプルでミニマルなポートフォリオサイト',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <header>
          <nav className="header-nav" aria-label="Main navigation">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                {/* お問い合わせを Home ページ内のアンカーに */}
                <Link href="/#contact">お問い合わせ</Link>
              </li>
              <li>
                <Link href="/legal">特定商取引法</Link>
              </li>
              <li>
                <Link href="/projects">個人開発まとめ</Link>
              </li>
            </ul>
          </nav>
        </header>

        {children}

        <footer>
          <p>© 2025 My Portfolio. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

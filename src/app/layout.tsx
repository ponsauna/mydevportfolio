// app/layout.tsx
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
        <header style={{ borderBottom: '1px solid #ccc', padding: '1rem 0' }}>
          <nav className="container" aria-label="Main navigation">
            <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/contact">お問い合わせ</Link>
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

        <main className="container" style={{ marginTop: '2rem' }}>
          {children}
        </main>

        <footer
          style={{
            borderTop: '1px solid #ccc',
            padding: '1rem 0',
            marginTop: '2rem',
          }}
        >
          <div className="container">
            <p>© 2023 My Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

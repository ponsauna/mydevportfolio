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
        <footer className="footer">
          <div className="container">
            <p>© 2025 My Portfolio. All rights reserved.</p>
            <div className="sns-links">
              <a
                href="https://x.com/PuchiTech_Pon"
                target="_blank"
                rel="noopener noreferrer"
                className="sns-link"
              >
                <img src="/icons/twitter.svg" alt="Twitter" />
                Twitter
              </a>
              <a
                href="https://www.youtube.com/@PuchiTech_Pon"
                target="_blank"
                rel="noopener noreferrer"
                className="sns-link"
              >
                <img src="/icons/youtube.svg" alt="YouTube" />
                YouTube
              </a>
              <a
                href="https://note.com/puchitech_pon"
                target="_blank"
                rel="noopener noreferrer"
                className="sns-link"
              >
                <img src="/icons/note.svg" alt="Note" />
                Note
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

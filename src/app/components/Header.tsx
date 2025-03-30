'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <nav className="header-nav" aria-label="Main navigation">
      {/* ハンバーガーアイコン（モバイル用） */}
      <div className="hamburger" onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* ナビゲーションメニュー */}
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link href="/" onClick={handleClose}>Home</Link>
        </li>
        <li>
          <Link href="/#contact" onClick={handleClose}>お問い合わせ</Link>
        </li>
        <li>
          <Link href="/legal" onClick={handleClose}>特定商取引法</Link>
        </li>
        <li>
          <Link href="/projects" onClick={handleClose}>個人開発まとめ</Link>
        </li>
      </ul>
    </nav>
  );
}

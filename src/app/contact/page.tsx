// app/contact/page.tsx
'use client'; 
// フォームの送信などクライアント側の処理が必要な場合、"use client" を付ける
import { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: フォーム送信処理を実装(外部API呼び出し等)
    alert(`送信が完了しました。\nお名前: ${name}\nメールアドレス: ${email}\nメッセージ: ${message}`);
  };

  return (
    <section>
      <h1>お問い合わせ</h1>
      <p>ご意見やご質問など、お気軽にご連絡ください。</p>
      <form onSubmit={handleSubmit} style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
        <label>
          お名前（必須）
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
          />
        </label>
        <label>
          メールアドレス（必須）
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
          />
        </label>
        <label>
          メッセージ
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ width: '100%', height: '100px', padding: '0.5rem', marginTop: '0.25rem' }}
          />
        </label>
        <button type="submit">送信</button>
      </form>
    </section>
  );
}

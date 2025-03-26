'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback('');

    try {
      // APIルートへ送信
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setFeedback('送信が完了しました。ありがとうございます！');
        // フォームの内容をリセット
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setFeedback('送信に失敗しました。再度お試しください。');
      }
    } catch (error) {
      console.error('Error:', error);
      setFeedback('エラーが発生しました。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section>
      <h1>お問い合わせ</h1>
      <p>ご意見やご質問など、お気軽にご連絡ください。</p>
      <form
        onSubmit={handleSubmit}
        style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}
      >
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
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? '送信中...' : '送信'}
        </button>
      </form>
      {feedback && <p style={{ marginTop: '1rem' }}>{feedback}</p>}
    </section>
  );
}

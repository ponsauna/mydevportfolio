'use client';
import React, { useState } from "react";

export default function HomePage() {
  // Contactフォーム用の state
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setFeedback('送信が完了しました。ありがとうございます！');
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
    <>
      {/* ヒーローセクション */}
      <section className="hero-section">
        <div className="hero-text">
          Tsuyoshi Shirota Portfolio
          <div className="hero-arrow">
            <span className="circle"></span>
          </div>
        </div>
      </section>

      {/* Works セクション */}
      <section className="works-section">
        <div className="container">
          <h2>Works</h2>
          <p>私が個人で開発・運営をしている成果物です</p>
          <div className="works-grid">
            <div className="work-card">
              <img src="/neppashi.png" alt="Work 1" />
              <h3>
                <a href="https://www.neppashi.com/" target="_blank" rel="noopener noreferrer">
                  熱波師.com
                </a>
              </h3>
              <p>
                全国の熱波師を検索・応援するWebsite<br />
                WixStudioで作成
              </p>
            </div>
            <div className="work-card">
              <img src="/SaunaBlog.png" alt="Work 2" />
              <h3>
                <a href="https://www.tsuyoshishirota.com/" target="_blank" rel="noopener noreferrer">
                  サウナブログ
                </a>
              </h3>
              <p>サウナレビューブログ</p>
            </div>
            <div className="work-card">
              <img src="/videosort.png" alt="Work 3" />
              <h3>
                <a href="https://www.youtube.com/watch?v=fstQ4b94xe0" target="_blank" rel="noopener noreferrer">
                  動画自動仕分け
                </a>
              </h3>
              <p>
                複数のメディアを自動仕分け<br />
                Pythonで構築・Youtube編集前の動画整理の際に使用可能
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me セクション */}
      <section className="about-section">
        <div className="container">
          <h2>About Me</h2>
          <p>
            私は、外資系企業でプロダクトスペシャリストとして活躍しており、キャリアの始まりは広告営業でした。その経験を活かし、テクニカルな知識とビジネスの視点を融合させた役割に転身しました。
          </p>
          <p>
            シンガポールで4年間働いた経験を通じ、国際的な視野と多文化環境でのコミュニケーション力を磨きました。これにより、日本語、英語、中国語を自在に使いこなし、技術チームとビジネスチームの架け橋として双方の要望を的確に把握し、最適なソリューションを提供しています。
          </p>
          <p>
            また、個人開発にも積極的に取り組んでおり、自身が必要とするサービスの開発や、サウナ業界への貢献を目指したプロジェクトを進めています。将来的には、これらの経験と語学力を活かして、さらにグローバルなフィールドで活躍することを目標としています。
          </p>
        </div>
      </section>

      {/* Contact セクション */}
      <section id="contact" className="contact-section">
        <main className="container">
          <section>
            <h1>お問い合わせ</h1>
            <p>ご意見やご質問など、お気軽にご連絡ください。</p>
            <form
              onSubmit={handleSubmit}
              style={{
                marginTop: '1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                maxWidth: '400px',
              }}
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
        </main>
      </section>
    </>
  );
}

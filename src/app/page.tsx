export default function HomePage() {
  return (
    <>
      {/* ヒーローセクション */}
      <section className="hero-section">
        <div className="hero-text">
          Tsuyoshi Shirota Portfolio
          {/* スクロール促進用の矢印（棒＋円）を入れる例 */}
          <div className="hero-arrow">
            <span className="circle"></span>
          </div>
        </div>
      </section>

      {/* Worksセクション */}
      <section className="works-section">
        <div className="container">
          <h2>Works</h2>
          <p>私が個人で開発・運営をしている成果物です</p>
          <div className="works-grid">
            {/* カード1 */}
            <div className="work-card">
              <img src="/neppashi.png" alt="Work 1" />
              <h3>熱波師.com</h3>
              <p>全国の熱波師を検索・応援するWebsite
                WixStudioで作成
              </p>
            </div>
            {/* カード2 */}
            <div className="work-card">
              <img src="/images/work2.png" alt="Work 2" />
              <h3>タイトル2</h3>
              <p>詳細テキスト2</p>
            </div>
            {/* カード3 */}
            <div className="work-card">
              <img src="/images/work3.png" alt="Work 3" />
              <h3>タイトル3</h3>
              <p>詳細テキスト3</p>
            </div>
            {/* カード4 */}
            <div className="work-card">
              <img src="/images/work4.png" alt="Work 4" />
              <h3>タイトル4</h3>
              <p>詳細テキスト4</p>
            </div>
            {/* カード5 */}
            <div className="work-card">
              <img src="/images/work5.png" alt="Work 5" />
              <h3>タイトル5</h3>
              <p>詳細テキスト5</p>
            </div>
            {/* カード6 */}
            <div className="work-card">
              <img src="/images/work6.png" alt="Work 6" />
              <h3>タイトル6</h3>
              <p>詳細テキスト6</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

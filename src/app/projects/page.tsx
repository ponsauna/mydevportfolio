// app/projects/page.tsx
import Link from 'next/link';

const mockProjects = [
  { slug: 'auto-media-sorter', title: '縦横自動仕分けツール)', description: 'スマホで撮った動画や画像をアップロードするだけ！「縦動画・横動画・縦画像・横画像」に自動で仕分けします。' },

];

export default function ProjectsListPage() {
  return (
    <section>
      <h1>個人開発のまとめ</h1>
      <p>私が個人で開発したプロジェクトの一覧です。</p>
      <ul style={{ marginTop: '1rem' }}>
        {mockProjects.map((project) => (
          <li key={project.slug} style={{ marginBottom: '1rem' }}>
            <Link href={`/projects/${project.slug}`}>
              <strong>{project.title}</strong>
            </Link>
            <div>{project.description}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

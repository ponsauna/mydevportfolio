// app/projects/page.tsx
import Link from 'next/link';

const mockProjects = [
  { slug: 'todo-app', title: 'ToDoアプリ', description: 'シンプルなTODO管理アプリ' },
  { slug: 'weather-checker', title: '天気情報チェッカー', description: '天気APIを利用した天気表示アプリ' },
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

// app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation';

const mockProjects = [
  { slug: 'todo-app', title: 'ToDoアプリ', description: 'シンプルなTODO管理アプリ' },
  { slug: 'weather-checker', title: '天気情報チェッカー', description: '天気APIを利用した天気表示アプリ' },
];

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = mockProjects.find((p) => p.slug === params.slug);

  if (!project) {
    // slugに該当するプロジェクトがなければ404エラーを出す
    notFound();
  }

  return (
    <section>
      <h1>{project?.title}</h1>
      <p>{project?.description}</p>
      <p>
        ここにスクリーンショットや機能説明、使用技術、デモリンクなどを入れてください。
      </p>
    </section>
  );
}

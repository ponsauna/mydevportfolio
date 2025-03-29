type Project = {
  slug: string;
  title: string;
  description: string;
};

const mockProjects: Project[] = [
  {
    slug: 'auto-media-sorter',
    title: '縦横自動仕分けツール',
    description:
      'スマホで撮った動画や画像をアップロードするだけ！「縦動画・横動画・縦画像・横画像」に自動で仕分けします。',
  },
];

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = mockProjects.find((p) => p.slug === params.slug);

  if (!project) {
    return <p>プロジェクトが見つかりませんでした。</p>;
  }

  return (
    <section>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <div
        style={{
          position: 'relative',
          paddingBottom: '56.25%', // 16:9 のアスペクト比
          height: 0,
          marginTop: '1rem',
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/fstQ4b94xe0?vq=hd1080"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video"
        ></iframe>

      </div>
    </section>
  );
}
